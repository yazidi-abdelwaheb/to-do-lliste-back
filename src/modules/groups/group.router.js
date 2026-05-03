import {Router} from 'express';
import GroupController from './group.controller.js';

const routers = Router();

routers.get( '/', GroupController.getList);
// ****** Create one ******** //
routers.post('/', GroupController.createOne);
// ****** Read one ******** //
routers.get('/:id', GroupController.readOne);
// ****** Update one ******** //
routers.put('/:id', GroupController.updateOne);
// ****** Delete one ******** //
routers.delete('/:id', GroupController.deleteOne);



export default routers;