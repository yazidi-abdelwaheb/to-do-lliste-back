import {Router} from 'express';
import ProjectController from './users.controller.js';

const routers = Router();

routers.get( '/', ProjectController.getList);
// ****** Create one ******** //
routers.post('/', ProjectController.createOne);
// ****** Read one ******** //
routers.get('/:id', ProjectController.readOne);
// ****** Update one ******** //
routers.put('/:id', ProjectController.updateOne);
// ****** Delete one ******** //
routers.delete('/:id', ProjectController.deleteOne);



export default routers;