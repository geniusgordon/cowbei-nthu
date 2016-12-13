import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import user from './user';
import post from './post';
import comment from './comment';
import reaction from './reaction';

dotenv.config();

const dbName = process.env.DB_NAME || 'db';
const dbUsername = process.env.DB_USERNAME || '';
const dbPassword = process.env.DB_PASSWORD || '';

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  dialect: 'mysql',
  logging: false,
});

export const User = sequelize.import('user', user);
export const Post = sequelize.import('post', post);
export const Comment = sequelize.import('comment', comment);
export const Reaction = sequelize.import('reaction', reaction);

Post.hasMany(Comment);
Post.hasMany(Reaction);

Comment.belongsTo(User);
Comment.belongsTo(Post);
Comment.belongsTo(Comment, { foreignKey: 'parent' });

Reaction.belongsTo(User);
Reaction.belongsTo(Post);

export default sequelize;

