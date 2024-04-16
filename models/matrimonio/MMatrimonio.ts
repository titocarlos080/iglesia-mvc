import ConectorDB from "../iglesiaDB";
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import Matrimonio from "./Matrimonio";
 
class MMatrimonio {
    // Método para crear un nuevo Matrimonio
    public async crearMatrimonio(nuevoMatrimonio: Matrimonio) {
        const connection = ConectorDB.getConexion();
        const query =
            'INSERT INTO Matrimonio (fecha, id_esposo, id_esposa) VALUES (?, ?, ?)';
        try {
            await connection.promise().query(query, [
                nuevoMatrimonio.getFecha(),
                nuevoMatrimonio.getIdEsposo(),
                nuevoMatrimonio.getIdEsposa(),
            ]);
            console.log('Matrimonio creado exitosamente.');
        } catch (error) {
            console.error('Error al crear el Matrimonio:', error);
            throw error; // Lanzar el error para manejarlo en el controlador
        }
    }

// Método para obtener todos los Matrimonios con información detallada de esposos y esposas
public async obtenerMatrimoniosConDetalles() {
    const connection = ConectorDB.getConexion();
    const query = `
        SELECT 
          m.id AS matrimonio_id,
          m.fecha AS fecha_matrimonio,
          es.id AS esposo_id,
          es.nombre AS nombre_esposo,
          es.fecha_nacimiento AS fecha_nacimiento_esposo,
          es.sexo AS sexo_esposo,
          es.id_padre AS id_padre_esposo,
          es.id_madre AS id_madre_esposo,
          es.id_cargo AS id_cargo_esposo,
          ma.id AS esposa_id,
          ma.nombre AS nombre_esposa,
          ma.fecha_nacimiento AS fecha_nacimiento_esposa,
          ma.sexo AS sexo_esposa,
          ma.id_padre AS id_padre_esposa,
          ma.id_madre AS id_madre_esposa,
          ma.id_cargo AS id_cargo_esposa
        FROM matrimonio m
        INNER JOIN persona es ON m.id_esposo = es.id
        INNER JOIN persona ma ON m.id_esposa = ma.id
    `;
    try {
        // Usar connection.promise().query() para obtener una promesa
        const [rows, fields] = await connection.promise().query(query);
        return rows; // Devolver los resultados de la consulta
    } catch (error) {
        console.error('Error al obtener los Matrimonios con detalles:', error);
        return []; // Devolver un array vacío en caso de error
    }
}


    // Método para obtener un Matrimonio por su ID
    public async obtenerMatrimonioPorId(id: number): Promise<Matrimonio | null> {
        const connection = ConectorDB.getConexion();
        const query = 'SELECT * FROM Matrimonio WHERE id = ?'; // Consulta con cláusula WHERE
        try {
            // Ejecutar la consulta con el ID como parámetro
            const [rows]: [RowDataPacket[], unknown] = await connection.promise().query(query, [id]);
            if (rows.length === 0) {
                console.log(`No se encontró ningún Matrimonio con ID ${id}`);
                return null; // Devolver null si no se encontró ningún Matrimonio
            }
            const primerResultado = rows[0]; // Obtener el primer resultado
            const matrimonio = new Matrimonio(
                primerResultado.id,
                primerResultado.fecha,
                primerResultado.id_esposo,
                primerResultado.id_esposa
            );
            console.log('Matrimonio:', matrimonio.toString());
            return matrimonio;
        } catch (error) {
            console.error('Error al obtener el Matrimonio por ID:', error);
            return null; // Devolver null en caso de error
        }
    }

    // Método para eliminar un Matrimonio por su ID
    public async eliminarMatrimonioPorId(id: number) {
        const connection = ConectorDB.getConexion();
        const query = 'DELETE FROM Matrimonio WHERE id = ?'; // Consulta con cláusula WHERE
        try {
            // Ejecutar la consulta con el ID como parámetro
            const [rows, _] = await connection.promise().query(query, [id]);
            console.log(`Matrimonio eliminado con ID: ${id}`);
            // Devolver el número de filas afectadas
            return (rows as ResultSetHeader).affectedRows;
        } catch (error) {
            console.error('Error al eliminar el Matrimonio por ID:', error);
            return 0; // Devolver 0 en caso de error
        }
    }

    // Método para actualizar un Matrimonio
    public async actualizarMatrimonio(matrimonio: Matrimonio) {
        const connection = ConectorDB.getConexion();
        const query = 'UPDATE Matrimonio SET fecha = ?, id_esposo = ?, id_esposa = ? WHERE id = ?';
        try {
            const [result] = await connection.promise().query(query, [
                matrimonio.getFecha(),
                matrimonio.getIdEsposo(),
                matrimonio.getIdEsposa(),
                matrimonio.getId()
            ]);
            if ((result as ResultSetHeader).affectedRows > 0) {
                console.log(`Matrimonio actualizado exitosamente.`);
                return true; // La actualización fue exitosa
            } else {
                console.log(`No se encontró ningún Matrimonio con ID ${matrimonio.getId()}`);
                return false; // No se encontró el Matrimonio con el ID dado
            }
        } catch (error) {
            console.error('Error al actualizar el Matrimonio:', error);
            return false; // Error al ejecutar la consulta
        }
    }
}

export default MMatrimonio;


