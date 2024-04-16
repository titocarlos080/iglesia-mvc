import ConectorDB from "../iglesiaDB";
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Evento from "./evento";
 
class MEvento {
    // Método para crear un nuevo Evento
    public async crearEvento(nuevoEvento: Evento) {
        const connection = ConectorDB.getConexion();
        const query =
            'INSERT INTO Evento (nombre, fecha, descripcion) VALUES (?, ?, ?)';
        try {
            await connection.promise().query(query, [
                nuevoEvento.getNombre(),
                nuevoEvento.getFecha(),
                nuevoEvento.getDescripcion(),
            ]);
            console.log('Evento creado exitosamente.');
        } catch (error) {
            console.error('Error al crear el Evento:', error);
            throw error; // Lanzar el error para manejarlo en el controlador
        }
    }

    // Método para obtener todos los Eventos
    public async obtenerEventos() {
        const connection = ConectorDB.getConexion();
        const query = 'SELECT * FROM Evento';
        try {
            // Usar connection.promise().query() para obtener una promesa
            const [rows, fields] = await connection.promise().query(query);
            return rows; // Devolver los resultados de la consulta
        } catch (error) {
            console.error('Error al obtener los Eventos:', error);
            return []; // Devolver un array vacío en caso de error
        }
    }

    // Método para obtener un Evento por su ID
    public async obtenerEventoPorId(id: number)   {
        const connection = ConectorDB.getConexion();
        const query = 'SELECT * FROM Evento WHERE id = ?'; // Consulta con cláusula WHERE
        try {
            // Ejecutar la consulta con el ID como parámetro
            const [rows]: [RowDataPacket[], unknown] = await connection.promise().query(query, [id]);
            if (rows.length === 0) {
                console.log(`No se encontró ningún Evento con ID ${id}`);
                return null; // Devolver null si no se encontró ningún Evento
            }
            const primerResultado = rows[0]; // Obtener el primer resultado
            const evento = new Evento(
                primerResultado.id,
                primerResultado.nombre,
                primerResultado.fecha,
                primerResultado.descripcion
            );
            console.log('Evento:', evento.toString());
            return evento;
        } catch (error) {
            console.error('Error al obtener el Evento por ID:', error);
            return null; // Devolver null en caso de error
        }
    }

    // Método para eliminar un Evento por su ID
    public async eliminarEventoPorId(id: number) {
        const connection = ConectorDB.getConexion();
        const query = 'DELETE FROM Evento WHERE id = ?'; // Consulta con cláusula WHERE
        try {
            // Ejecutar la consulta con el ID como parámetro
            const [rows, _] = await connection.promise().query(query, [id]);
            console.log(`Evento eliminado con ID: ${id}`);
            // Devolver el número de filas afectadas
            return (rows as ResultSetHeader).affectedRows;
        } catch (error) {
            console.error('Error al eliminar el Evento por ID:', error);
            return 0; // Devolver 0 en caso de error
        }
    }

    // Método para actualizar un Evento
    public async actualizarEvento(evento: Evento) {
        const connection = ConectorDB.getConexion();
        const query = 'UPDATE Evento SET nombre = ?, fecha = ?, descripcion = ? WHERE id = ?';
        try {
            const [result] = await connection.promise().query(query, [
                evento.getNombre(),
                evento.getFecha(),
                evento.getDescripcion(),
                evento.getId()
            ]);
            if ((result as ResultSetHeader).affectedRows > 0) {
                console.log(`Evento actualizado exitosamente.`);
                return true; // La actualización fue exitosa
            } else {
                console.log(`No se encontró ningún Evento con ID ${evento.getId()}`);
                return false; // No se encontró el Evento con el ID dado
            }
        } catch (error) {
            console.error('Error al actualizar el Evento:', error);
            return false; // Error al ejecutar la consulta
        }
    }
}

export default MEvento;
