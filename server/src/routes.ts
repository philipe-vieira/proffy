import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const ClassesControllers = new ClassesController();
const ConnectionsControllers = new ConnectionsController();

routes
  .get('/', (req, res) => {
    return res.json({ message: 'hello word' });
  })
  .post('/classes', ClassesControllers.create)
  .get('/classes', ClassesControllers.index);

routes
  .get('/connections', ConnectionsControllers.index)
  .post('/connections', ConnectionsControllers.create);

export default routes;
