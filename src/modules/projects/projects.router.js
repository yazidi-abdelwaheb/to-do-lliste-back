import {Router} from 'express';
import UsersController from './users.controller.js';

const routers = Router();

routers.get( '/', UsersController.getList);
// ****** Create one ******** //
routers.post('/', UsersController.createOne);
// ****** Read one ******** //
routers.get('/:id', UsersController.readOne);
// ****** Update one ******** //
routers.put('/:id', UsersController.updateOne);
// ****** Delete one ******** //
routers.delete('/:id', UsersController.deleteOne);



export default routers;