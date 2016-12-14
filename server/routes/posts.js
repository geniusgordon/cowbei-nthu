import { Router } from 'express';
import _ from 'lodash/fp';
import sequelize, { Post, Reaction } from '../models';
import wrap from './wrap';

const router = new Router();
router.use('/', wrap(async (req, res) => {
  req.checkQuery('offset', 'offset should be a integer').optional().isInt();
  req.checkQuery('limit', 'limit should be a integer').optional().isInt();
  req.sanitizeQuery('offset').toInt();
  req.sanitizeQuery('limit').toInt();
  const error = req.validationErrors(true);
  if (error) {
    res.status(400).json(error);
    return;
  }
  const { offset = 0, limit = 20 } = req.query;
  const types = Reaction.attributes.type.values;
  const posts = await Post.findAll({
    attributes: ['id', 'message', 'cowbei_id', 'created_time', 'submitted_time'],
    order: [['created_time', 'DESC']],
    offset,
    limit,
    raw: true,
  });
  const postIds = posts.map(post => post.id);
  const reactions = (await Reaction.findAll({
    attributes: [
      ...types.map(type => [sequelize.fn('SUM', sequelize.literal(`CASE WHEN type="${type}" THEN 1 ELSE 0 END`)), type.toLowerCase()]),
    ],
    where: {
      postId: postIds,
    },
    group: ['postId'],
    raw: true,
  })).map(r => ({ reactions: r }));
  const result = _.values(_.merge(posts, reactions));
  res.json(result);
}));

export default router;

