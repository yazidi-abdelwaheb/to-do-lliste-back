import {Router} from 'express';
import featuresController from './features.controller.js';
const routers = Router();

routers.get( '/', featuresController.getList);

// ****** Read one ******** //
routers.get('/:id', featuresController.readOne);
// ****** Update one ******** //
routers.put('/:id', featuresController.updateOne);



export default routers;