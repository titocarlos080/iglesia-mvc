import { Request, Response } from "express";
import MPersona from "../models/persona/MPesona";
import MCargo from "../models/cargo/MCargo";
import Persona from "../models/persona/Persona";
class CPersona {
  

    static async eliminar(req: Request, res: Response) {


        try {
            const mPersona: MPersona = new MPersona();
            const personaId: number = Number(req.params.id); // Obtener el ID del cargo a eliminar


            //  Verificar si el ID es un número válido
            if (isNaN(personaId)) {
                console.error('ID de persona inválido:', req.params.id);
                res.status(400).send('ID de persona inválido');
                return;
            }

            await mPersona.eliminarPersonaPorId(personaId); // Eliminar el cargo utilizando el ID
            res.redirect("/personas");


        } catch (error) {
            console.error('Error al eliminar el Persona:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    static async index(req: Request, res: Response) {

        try {
            const mPersona: MPersona = new MPersona();
            const mCargo: MCargo = new MCargo();
            const cargos = await mCargo.obtenerCargos();
            const personas = await mPersona.obtenerPersonas(); // Llamar al método obtenerCargos de forma asíncrona
            const personasMujeres = await mPersona.obtenerPersonasMujeres(); // Llamar al método obtenerCargos de forma asíncrona
            const personasVarones = await mPersona.obtenerPersonasVarones(); // Llamar al método obtenerCargos de forma asíncrona
            
            
            res.render('persona/Vpersona', { personas: personas, cargos: cargos, madres: personasMujeres, padres: personasVarones  });
        } catch (error) {
            console.error('Error al obtener las personas:', error);
            res.status(500).send('Error interno del servidor');
        }
    }

    static async crear(req: Request, res: Response) {
        try {
            const { nombre, fechaNacimiento, sexo, idPadre, idMadre, idCargo } = req.body;
            // Crear una nueva instancia de la persona con los datos recibidos
            const nuevaPersona = new Persona(0, nombre, fechaNacimiento, sexo, idPadre, idMadre, idCargo);
            const mPersona = new MPersona();
            mPersona.crearPersona(nuevaPersona);

            res.redirect("/personas");
        } catch (error) {
            console.error('Error al crear la persona:', error);
            res.status(500).send('Error interno del servidor al crear la persona');
        }
    }
    static async update(req: Request, res: Response) {
        try {
            const { id, nombre, fechaNacimiento, sexo, idPadre, idMadre, idCargo } = req.body;
            console.log(req.body);
            
            const mPersona: MPersona = new MPersona();
            await mPersona.actualizarPersona(new Persona(id, nombre, fechaNacimiento, sexo, idPadre, idMadre, idCargo));
            return res.status(200).send("ok");
        } catch (error) {
            console.error('Error al actualizar el cargo:', error);
            res.status(500).send('Error interno del servidor');
        }


    }

}
export default CPersona;