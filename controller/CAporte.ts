import { Request, Response } from "express";
import MAporte from "../models/aporte/MAporte";
import Aporte from "../models/aporte/Aporte";
import MPersona from "../models/persona/MPesona";
import MEvento from "../models/evento/Mevento";

class CAporte {

    static async eliminar(req: Request, res: Response) {
        try {
            const mAporte: MAporte = new MAporte();
            const aporteId: number = Number(req.params.id);

            if (isNaN(aporteId)) {
                console.error('ID de aporte inválido:', req.params.id);
                res.status(400).send('ID de aporte inválido');
                return;
            }

            await mAporte.eliminarAporte(aporteId);
            res.redirect("/aportes");
        } catch (error) {
            console.error('Error al eliminar el aporte:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    static async index(req: Request, res: Response) {
        try {
            const mPersona: MPersona = new MPersona();
            const mEvento: MEvento = new MEvento();
            const mAporte: MAporte = new MAporte();
            const aportes = await mAporte.obtenerAportesDetallado();
            const eventos = await mEvento.obtenerEventos();
            const personas = await mPersona.obtenerPersonas();
            res.render('aporte/Vaporte', { aportes: aportes, personas: personas, eventos: eventos });
        } catch (error) {
            console.error('Error al obtener los aportes:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    static async crear(req: Request, res: Response) {
        try {
            const { monto, fecha, id_persona, id_evento } = req.body;
             
            const nuevoAporte = new Aporte(0, monto, fecha, id_persona, id_evento);
            const mAporte = new MAporte();
            await mAporte.crearAporte(nuevoAporte);

            res.redirect("/aportes");
        } catch (error) {
            console.error('Error al crear el aporte:', error);
            res.status(500).send('Error interno del servidor al crear el aporte');
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id, monto, fecha, id_persona, id_evento } = req.body;
            const mAporte: MAporte = new MAporte();
            await mAporte.actualizarAporte(new Aporte(id, monto, fecha, id_persona, id_evento));
            return res.status(200).send("OK");
        } catch (error) {
            console.error('Error al actualizar el aporte:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
}

export default CAporte;
