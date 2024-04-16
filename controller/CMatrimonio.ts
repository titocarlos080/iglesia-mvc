import { Request, Response } from "express";
import MMatrimonio from "../models/matrimonio/MMatrimonio";
import Matrimonio from "../models/matrimonio/Matrimonio";
import MPersona from "../models/persona/MPesona";

class CMatrimonio {
    static async eliminar(req: Request, res: Response) {
        try {
            const mMatrimonio: MMatrimonio = new MMatrimonio();
            const matrimonioId: number = Number(req.params.id);

            if (isNaN(matrimonioId)) {
                console.error('ID de matrimonio inválido:', req.params.id);
                res.status(400).send('ID de matrimonio inválido');
                return;
            }

            await mMatrimonio.eliminarMatrimonioPorId(matrimonioId);
            res.redirect("/matrimonios");

        } catch (error) {
            console.error('Error al eliminar el Matrimonio:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    static async index(req: Request, res: Response) {
        try {
            const mMatrimonio: MMatrimonio = new MMatrimonio();
            const matrimonios = await mMatrimonio.obtenerMatrimoniosConDetalles();
            const mPersona: MPersona = new MPersona();
            const varones = await mPersona.obtenerPersonasVarones();
            const mujeres = await mPersona.obtenerPersonasMujeres();
            
            // Puedes modificar el render para pasar los datos necesarios al template
            res.render('matrimonio/Vmatrimonio', { matrimonios: matrimonios ,varones:varones,mujeres:mujeres });

        } catch (error) {
            console.error('Error al obtener los matrimonios:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    static async crear(req: Request, res: Response) {
        try {
            const { fecha, idEsposo, idEsposa } = req.body;
            const nuevoMatrimonio = new Matrimonio(0, fecha, idEsposo, idEsposa);
            const mMatrimonio = new MMatrimonio();
            await mMatrimonio.crearMatrimonio(nuevoMatrimonio);
            res.redirect("/matrimonios");

        } catch (error) {
            console.error('Error al crear el matrimonio:', error);
            res.status(500).send('Error interno del servidor al crear el matrimonio');
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id, fecha, idEsposo, idEsposa } = req.body;
            const mMatrimonio: MMatrimonio = new MMatrimonio();
            await mMatrimonio.actualizarMatrimonio(new Matrimonio(id, fecha, idEsposo, idEsposa));
            return res.status(200).send("ok");

        } catch (error) {
            console.error('Error al actualizar el matrimonio:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
}

export default CMatrimonio;
