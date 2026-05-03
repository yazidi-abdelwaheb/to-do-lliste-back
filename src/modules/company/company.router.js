import {Router} from 'express';
import CompanyController from './company.controller.js';
const routers = Router();

routers.get( '/', CompanyController.getList);
// ****** Create one ******** //
routers.post('/', CompanyController.createOne);
// ****** Read one ******** //
routers.get('/:id', CompanyController.readOne);
// ****** Update one ******** //
routers.put('/:id', CompanyController.updateOne);
// ****** Delete one ******** //
routers.delete('/:id', CompanyController.deleteOne);


export default routers;