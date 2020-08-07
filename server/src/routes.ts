import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const ClassesControllers = new ClassesController();

routes
  .get('/', (req, res) => {
    return res.json({ message: 'hello word' });
  })
  .post('/classes', ClassesControllers.create)
  .get('/classes', ClassesControllers.index);

export default routes;
