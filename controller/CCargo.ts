import { Request, Response } from 'express';
import MCargo from '../models/cargo/MCargo';
import Cargo from '../models/cargo/Cargo';
 

class CCargo {
    
    static async update(req: Request, res: Response) {
             try {
                console.log("-----------------------------");
                console.log(req.body.id);
                console.log("-----------------------------");
                
                const mCargo: MCargo = new MCargo();
                await mCargo.actualizarCargo(req.body.id, req.body.nombre);
        
                return res.status(200).send("ok");
            } catch (error) {
                console.error('Error al actualizar el cargo:', error);
                res.status(500).send('Error interno del servidor');
            }
        
        
    }
 

    static async index(req: Request, res: Response) {
        try {
            const mCargo: MCargo = new MCargo();
            const cargos = await mCargo.obtenerCargos(); // Llamar al método obtenerCargos de forma asíncrona
            res.render('cargo/VCargo', { cargos: cargos });
        } catch (error) {
            console.error('Error al obtener los cargos:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    static async crear(req: Request, res: Response) {
        try {
            const mCargo: MCargo = new MCargo();
            var cargo: Cargo = new Cargo();
            cargo.setNombre(req.body.nombre);
            mCargo.crearCargo(cargo);
            res.redirect("/cargos");
        } catch (error) {
            console.error('Error al obtener los cargos:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
    static async eliminar(req: Request, res: Response) {


        try {
            const mCargo: MCargo = new MCargo();
            const cargoId: number = Number(req.params.id); // Obtener el ID del cargo a eliminar


            //  Verificar si el ID es un número válido
            if (isNaN(cargoId)) {
                console.error('ID de cargo inválido:', req.params.id);
                res.status(400).send('ID de cargo inválido');
                return;
            }

            await mCargo.eliminarCargoPorId(cargoId); // Eliminar el cargo utilizando el ID
            res.redirect("/cargos");


        } catch (error) {
            console.error('Error al eliminar el cargo:', error);
            res.status(500).send('Error interno del servidor');
        }
    }


    static async editar(req: Request, res: Response) {
        try {
            const mCargo: MCargo = new MCargo();
            const cargoId: number = Number(req.params.id); // Obtener el ID del cargo a editar
            // Verificar si el ID es un número válido
            if (isNaN(cargoId)) {
                console.error('ID de cargo inválido:', req.params.id);
                res.status(400).send('ID de cargo inválido');
                return;
            }

            // Obtener el cargo actual por su ID
            const cargoActual = await mCargo.obtenerCargoPorId(cargoId);
            // Verificar si el cargo existe
            if (!cargoActual) {
                console.error('Cargo no encontrado para editar:', cargoId);
                res.status(404).send('Cargo no encontrado');
                return;
            }

            // Renderizar el formulario de edición con los datos actuales del cargo
            res.render('cargo/edit', { cargo: cargoActual });

        } catch (error) {
            console.error('Error al editar el cargo:', error);
            res.status(500).send('Error interno del servidor');
        }
    }





}

export default CCargo;