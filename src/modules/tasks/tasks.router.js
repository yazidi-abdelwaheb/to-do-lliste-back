import express from 'express';
import tasksController from './tasks.controller.js';
const routers = express.Router();

routers.get( '/', tasksController.getList);
// ****** Create one ******** //
routers.post('/', tasksController.createOne);
// ****** Read one ******** //
routers.get('/:id', tasksController.readOne);
// ****** Update one ******** //
routers.put('/:id', tasksController.updateOne);
// ****** Delete one ******** //
routers.delete('/:id', tasksController.deleteOne);

routers.patch('/:id/complited', tasksController.completed);


export default routers;