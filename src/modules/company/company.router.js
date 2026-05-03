import {Router} from 'express';
import featuresController from './company.controller.js';
const routers = Router();

routers.get( '/', featuresController.getList);
// ****** Create one ******** //
routers.post('/', featuresController.createOne);
// ****** Read one ******** //
routers.get('/:id', featuresController.readOne);
// ****** Update one ******** //
routers.patch('/:id', featuresController.updateOne);
// ****** Delete one ******** //
routers.delete('/:id', featuresController.deleteOne);


export default routers;