import ConectorDB from "../iglesiaDB";
import Persona from "./Persona";
import { ResultSetHeader, RowDataPacket } from 'mysql2';
class MPersona {
    async obtenerPersonasVarones() {
        const connection = ConectorDB.getConexion();
        const query = 'SELECT * FROM Persona WHERE sexo="M"';
        try {
            // Usar con.promise().query() para obtener una promesa
            const [rows, fields] = await connection.promise().query(query);


            return rows; // Devolver los resultados de la consulta
        } catch (error) {
            console.error('Error al obtener los Personas:', error);
            return []; // Devolver un array vacío en caso de error
        }
    }
    async obtenerPersonasMujeres() {
        const connection = ConectorDB.getConexion();
        const query = 'SELECT * FROM Persona WHERE sexo="F"';
        try {
            // Usar con.promise().query() para obtener una promesa
            const [rows, fields] = await connection.promise().query(query);


            return rows; // Devolver los resultados de la consulta
        } catch (error) {
            console.error('Error al obtener los Personas:', error);
            return []; // Devolver un array vacío en caso de error
        }
    }
    // Método para crear un nuevo Persona
    public async crearPersona(nuevaPersona: Persona) {
        const connection = ConectorDB.getConexion();
        const query =
            'INSERT INTO Persona (nombre, fecha_nacimiento, sexo, id_padre, id_madre, id_cargo) VALUES (?, ?, ?, ?, ?, ?)';
        try {
            await connection.promise().query(query, [
                nuevaPersona.getNombre(),
                nuevaPersona.getFechaNacimiento(),
                nuevaPersona.getSexo(),
                nuevaPersona.getIdPadre(),
                nuevaPersona.getIdMadre(),
                nuevaPersona.getIdCargo(),
            ]);
            console.log('Persona creada exitosamente.');
        } catch (error) {
            console.error('Error al crear la Persona:', error);
            throw error; // Lanzar el error para manejarlo en el controlador
        }
    }

    // Método para obtener todos los Personas
    public async obtenerPersonas() {
        const connection = ConectorDB.getConexion();
        const query = `
        SELECT p.id, p.nombre, p.fecha_nacimiento, p.sexo, p.id_padre, p.id_madre,
               padre.nombre AS nombre_padre, madre.nombre AS nombre_madre,
               cargo.nombre AS nombre_cargo, p.id_cargo
        FROM Persona p
        LEFT JOIN Persona padre ON p.id_padre = padre.id
        LEFT JOIN Persona madre ON p.id_madre = madre.id
        LEFT JOIN Cargo cargo ON p.id_cargo = cargo.id
    `;
        try {
            // Usar con.promise().query() para obtener una promesa
            const [rows, fields] = await connection.promise().query(query);


            return rows; // Devolver los resultados de la consulta
        } catch (error) {
            console.error('Error al obtener los Personas:', error);
            return []; // Devolver un array vacío en caso de error
        }
    }

    // Método para obtener un Persona por su ID

    public async obtenerPersonaPorId(id: number):Promise<Persona> {
        const connection = ConectorDB.getConexion();
        const query = 'SELECT * FROM Persona WHERE id = ?'; // Consulta con cláusula WHERE
        const persona: Persona = new Persona();
        try {
            // Ejecutar la consulta con el ID como parámetro
            const [rows]: [RowDataPacket[], unknown] = await connection.promise().query(query, [id]);

            if (rows.length === 0) {
                console.log(`No se encontró ningún Persona con ID ${id}`);
             }
            const primerResultado = rows.shift(); // Obtener el primer resultado
            if (primerResultado) {
                persona.setId(primerResultado.id);
                persona.setNombre(primerResultado.nombre);
                // Otros campos que quieras asignar al objeto Persona
            }
            console.log(Persona);

            return persona;
        } catch (error) {
            console.error('Error al obtener el Persona por ID:', error);
        return persona;
        }
    }

    // Método para eliminar un Persona por su ID
    public async eliminarPersonaPorId(id: number) {
        const connection = ConectorDB.getConexion();
        const query = 'DELETE FROM Persona WHERE id = ?'; // Consulta con cláusula WHERE

        try {
            // Ejecutar la consulta con el ID como parámetro
            const [rows, _] = await connection.promise().query(query, [id]);
            console.log('Persona eliminado ID:' + rows);
            // Devolver el objeto Persona encontrado
        } catch (error) {
            console.error('Error al obtener el Persona por ID:', error);
            return null; // Devolver null en caso de error
        }
    }


    // Método para actualizar un Persona
    public async actualizarPersona(persona: Persona) {
        const connection = ConectorDB.getConexion();
        const query = 'UPDATE Persona SET nombre = ?, fecha_nacimiento = ?, sexo = ?, id_padre = ?, id_madre = ?, id_cargo = ?  WHERE id = ?';
        try {
            console.log(query);
            const [result] = await connection.promise().query(query,
                [persona.getNombre(),
                persona.getFechaNacimiento(),
                persona.getSexo(),
                persona.getIdPadre(),
                persona.getIdMadre(),
                persona.getIdCargo(),
                persona.getId()
                ]);

            if ((result as ResultSetHeader).affectedRows > 0) {
                console.log('Persona actualizado exitosamente.');
                return true; // La actualización fue exitosa
            } else {


                console.log((result as ResultSetHeader).info);

                console.log('El Persona con ID ' + persona.getId() + ' no fue encontrado.');
                return false; // No se encontró el Persona con el ID dado
            }
        } catch (error) {
            console.error('Error al actualizar el Persona:', error);
            return false; // Error al ejecutar la consulta
        }
    }



}

export default MPersona;