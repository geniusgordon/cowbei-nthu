import express from 'express';
import expressValidator from 'express-validator';
import path from 'path';
import router from './routes';

const port = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(expressValidator());
app.use(router);
app.use((req, res) => {
  res.status(404).json({
    message: 'no such route',
  });
});
app.use((error, req, res, next) => {
  res.json({
    message: error.message,
    stack: error.stack.split('\n'),
  });
});

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}/`); // eslint-disable-line no-console
});

