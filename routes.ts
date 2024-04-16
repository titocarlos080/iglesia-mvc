import { Router, Request, Response } from 'express';
import HomeController from './controller/HomeController';
import CAporte from './controller/CAporte';
import CCargo from './controller/CCargo';
import CEvento from './controller/CEvento';
import CPersona from './controller/CPersona';
import CMatrimonio from './controller/CMatrimonio';
import CProgramacion from './controller/CProgramacion';
import CTarea from './controller/CTarea';

const router = Router();

router.get('/', HomeController.index);
 
router.get('/cargos', CCargo.index);
router.post('/cargos/add', CCargo.crear);
router.post('/cargos/edit', CCargo.update);
router.get('/cargos/edit/:id', CCargo.editar);
router.get('/cargos/delete/:id', CCargo.eliminar);

router.get('/eventos', CEvento.index);
router.post('/eventos/add', CEvento.crear);
router.post('/eventos/update', CEvento.update);
router.get('/eventos/delete/:id', CEvento.eliminar);

router.get('/personas', CPersona.index);
router.post('/personas/add', CPersona.crear);
router.post('/personas/update', CPersona.update);
router.get('/personas/delete/:id', CPersona.eliminar);


router.get('/matrimonios', CMatrimonio.index);
router.post('/matrimonios/add', CMatrimonio.crear);
router.post('/matrimonios/update', CMatrimonio.update);
router.get('/matrimonios/delete/:id', CMatrimonio.eliminar);

router.get('/programacion', CProgramacion.index);
router.post('/programaciones/add', CProgramacion.crear);
router.post('/programaciones/update', CProgramacion.update);
router.get('/programaciones/delete/:id_evento/:id_persona', CProgramacion.delete);


router.get('/tareas', CTarea.index);
router.post('/tareas/add', CTarea.crear);
router.post('/tareas/update', CTarea.update);
router.get('/tareas/delete/:id', CTarea.eliminar);


router.get('/aportes', CAporte.index);
router.post('/aportes/add', CAporte.crear);
router.post('/aportes/update', CAporte.update);
router.get('/aportes/delete/:id', CAporte.eliminar);
// Agrega más rutas según sea necesario

export default router;
