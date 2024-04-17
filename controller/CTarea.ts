import { Request, Response } from "express";
import MTarea from "../models/tarea/MTarea";
import Tarea from "../models/tarea/Tarea";

class CTarea { 
  
    static async eliminar(req: Request, res: Response) {
        try {
            const mTarea: MTarea = new MTarea();
            const tareaId: number = Number(req.params.id); // Obtener el ID de la tarea a eliminar

            // Verificar si el ID es un número válido
            if (isNaN(tareaId)) {
                console.error('ID de tarea inválido:', req.params.id);
                res.status(400).send('ID de tarea inválido');
                return;
            }

            await mTarea.eliminarTareaPorId(tareaId); // Eliminar la tarea utilizando el ID
            res.redirect("/tareas");
        } catch (error) {
            console.error('Error al eliminar la tarea:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    static async index(req: Request, res: Response) {
        try {
            const mTarea: MTarea = new MTarea();
            const tareas = await mTarea.obtenerTareas(); // Llamar al método obtenerTareas de forma asíncrona
            res.render('tarea/Vtarea', { tareas: tareas });
        } catch (error) {
            console.error('Error al obtener las tareas:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    static async crear(req: Request, res: Response) {
        try {
            const { nombre } = req.body;
            // Crear una nueva instancia de la tarea con los datos recibidos
            const nuevaTarea = new Tarea(nombre);
            const mTarea = new MTarea();
            await mTarea.crearTarea(nuevaTarea);
            res.redirect("/tareas");
        } catch (error) {
            console.error('Error al crear la tarea:', error);
            res.status(500).send('Error interno del servidor al crear la tarea');
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id, nombre } = req.body;
            const mTarea: MTarea = new MTarea();
            const tarea: Tarea = new Tarea(  nombre);
            tarea.setId(id);

            await mTarea.actualizarTarea(tarea);
            return res.status(200).send("ok");
        } catch (error) {
            console.error('Error al actualizar la tarea:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

}

export default CTarea;
