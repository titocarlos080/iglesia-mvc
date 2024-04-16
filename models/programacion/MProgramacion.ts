import ConectorDB from "../iglesiaDB";
import Programacion from "./Programacion";
import { RowDataPacket } from 'mysql2';

class MProgramacion {
    public async obtenerProgramacionesConDetalles() {
        const connection = ConectorDB.getConexion();
        const query = `
        SELECT   p.id_persona, p.id_tarea,p.id_evento,
        persona.nombre AS nombre_persona,
        tarea.nombre AS nombre_tarea,
        evento.nombre as nombre_evento,
        evento.fecha AS fecha_evento,
        evento.descripcion AS descripcion_evento
        FROM Programacion p
        INNER JOIN Persona persona ON p.id_persona = persona.id
        INNER JOIN Evento evento ON p.id_evento = evento.id
        INNER JOIN Tarea tarea ON p.id_tarea = tarea.id
        
        `;
        try {
            const [programaciones] = await connection.promise().query(query);
            return programaciones;
        } catch (error) {
            console.error('Error al obtener las programaciones:', error);
            return [];
        }
    }

    public async obtenerProgramacionPorId(id_evento: number, id_persona: number) {
        const connection = ConectorDB.getConexion();
        const query = 'SELECT * FROM Programacion WHERE id_evento = ? and id_persona=?';
        try {
            const [programacion] = await connection.promise().query(query, [id_evento, id_persona]);
            console.log(`se elimino programación con id_evento ${id_evento}`);
            return programacion;
        } catch (error) {
            console.error('Error al obtener la programación por ID:', error);
            return null;
        }
    }

    public async crearProgramacion(nuevaProgramacion: Programacion) {
        const connection = ConectorDB.getConexion();
        const query = 'INSERT INTO Programacion (id_evento, id_tarea,id_persona) VALUES (?, ?,?)';
        try {
            await connection.promise().query(query, [
                nuevaProgramacion.getIdEvento(),
                nuevaProgramacion.getIDTarea(),
                nuevaProgramacion.getIDPersona()
            ]);
            console.log('Programación creada exitosamente.');
        } catch (error) {
            console.error('Error al crear la programación:', error);
            throw error;
        }
    }

    // public async actualizarProgramacion(programacion: Programacion) {
    //     const connection = ConectorDB.getConexion();
    //     const query = 'UPDATE Programacion SET id_persona = ?, id_tarea = ? WHERE id = ?';
    //     try {
    //         const [result] = await connection.promise().query(query, [
    //             programacion.getIDPersona(),
    //             programacion.getIDTarea(),
    //             programacion.getId(),
    //         ]);

    //         if ((result as any).affectedRows > 0) {
    //             console.log('Programación actualizada exitosamente.');
    //             return true;
    //         } else {
    //             console.log('La programación con ID ' + programacion.getId() + ' no fue encontrada.');
    //             return false;
    //         }
    //     } catch (error) {
    //         console.error('Error al actualizar la programación:', error);
    //         return false;
    //     }
    // }

    public async eliminarProgramacionPorId(evento_id: number, persona_id: number) {
        const connection = ConectorDB.getConexion();
        const query = 'DELETE FROM Programacion WHERE evento_id = ? and persona_id=? ';
        try {
            const [result] = await connection.promise().query(query, [evento_id, persona_id]);

            if ((result as any).affectedRows > 0) {
                console.log('Programación eliminada exitosamente.');
                return true;
            } else {
                console.log('La programación con evento_id ' + evento_id + ' no fue encontrada.');
                return false;
            }
        } catch (error) {
            console.error('Error al eliminar la programación por ID:', error);
            return false;
        }
    }
}

export default MProgramacion;
