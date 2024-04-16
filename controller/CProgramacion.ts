import { Request, Response } from "express";
import MProgramacion from "../models/programacion/MProgramacion";
import MPersona from "../models/persona/MPesona";
import MTarea from "../models/tarea/MTarea";
import MEvento from "../models/evento/Mevento";
import Programacion from "../models/programacion/Programacion";
class CProgramacion {

  static async crear(req: Request, res: Response) {
    const { id_persona, id_tarea, id_evento, fecha_programacion } = req.body;
    const mProgramacion: MProgramacion = new MProgramacion();
    const programacion: Programacion = new Programacion(id_evento, id_persona, id_tarea);

    await mProgramacion.crearProgramacion(programacion)
    res.redirect("/programacion")
  }
  static delete(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }

  static update(req: Request, res: Response) {
    throw new Error('Method not implemented.');
  }
  static async index(req: Request, res: Response) {

    const mProgramacion: MProgramacion = new MProgramacion();
    const mPersona: MPersona = new MPersona();
    const mTarea: MTarea = new MTarea();
    const mEvento: MEvento = new MEvento();
    const eventos = await mEvento.obtenerEventos();

    const programaciones = await mProgramacion.obtenerProgramacionesConDetalles();
    const personas = await mPersona.obtenerPersonas();
    const tareas = await mTarea.obtenerTareas();

console.log(programaciones);


    res.render('programacion/Vprogramacion', { programaciones: programaciones, personas: personas, tareas: tareas, eventos: eventos });
  }


}

export default CProgramacion;