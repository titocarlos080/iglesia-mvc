import { Request, Response } from 'express';
import MEvento from '../models/evento/Mevento';
import Evento from '../models/evento/evento';
 
class CEvento {

  static async index(req: Request, res: Response) {
    try {
      const mEvento: MEvento = new MEvento();
      const eventos = await mEvento.obtenerEventos();
      res.render('evento/Vevento', { eventos: eventos });
    } catch (error) {
      console.error('Error al obtener los eventos:', error);
      res.status(500).send('Error interno del servidor');
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id, nombre, fecha, descripcion } = req.body
      const mEvento: MEvento = new MEvento();
      const evento: Evento = new Evento(id, nombre, fecha, descripcion)
      await mEvento.actualizarEvento(evento);
      return res.status(200).send("ok");
    } catch (error) {
      console.error('Error al actualizar el evento:', error);
      res.status(500).send('Error interno del servidor');
    }
  }

  static async crear(req: Request, res: Response) {
    try {
      const mEvento: MEvento = new MEvento();
      const nuevoEvento = new Evento(
        0, // El ID será generado automáticamente por la base de datos
        req.body.nombre,
        new Date(req.body.fecha),
        req.body.descripcion
      );
      await mEvento.crearEvento(nuevoEvento);
      res.redirect("/eventos");
    } catch (error) {
      console.error('Error al crear el evento:', error);
      res.status(500).send('Error interno del servidor');
    }
  }

  static async eliminar(req: Request, res: Response) {
    try {
      const mEvento: MEvento = new MEvento();
      const eventoId: number = Number(req.params.id);

      if (isNaN(eventoId)) {
        console.error('ID de evento inválido:', req.params.id);
        res.status(400).send('ID de evento inválido');
        return;
      }

      await mEvento.eliminarEventoPorId(eventoId);
      res.redirect("/eventos");
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
      res.status(500).send('Error interno del servidor');
    }
  }


}

export default CEvento;
