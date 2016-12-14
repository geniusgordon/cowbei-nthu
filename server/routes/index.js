import { Router } from 'express';
import path from 'path';
import posts from './posts';

const router = new Router();
router.use('/p', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/build/index.html'));
});
router.use('/api/posts', posts);

export default router;

