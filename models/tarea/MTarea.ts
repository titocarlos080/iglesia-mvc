import ConectorDB from "../iglesiaDB";
import Tarea from "./Tarea";
import {   ResultSetHeader, RowDataPacket } from 'mysql2';
class MTarea {
  // Método para crear un nuevo Tarea
  public async crearTarea(nuevoTarea: Tarea) {
    const connection = ConectorDB.getConexion();
    const query = 'INSERT INTO Tarea ( nombre) VALUES ( ?)';
    try {
      await connection.promise().query(query, [nuevoTarea.getNombre()]);
      console.log('Tarea creado exitosamente.');
    } catch (error) {
      console.error('Error al crear el Tarea:', error);
    }
  }

  // Método para obtener todos los Tareas
  public async obtenerTareas() {
    const connection = ConectorDB.getConexion();
    const query = 'SELECT * FROM Tarea';
    try {
      // Usar con.promise().query() para obtener una promesa
      const [rows, fields] = await connection.promise().query(query);


      return rows; // Devolver los resultados de la consulta
    } catch (error) {
      console.error('Error al obtener los Tareas:', error);
      return []; // Devolver un array vacío en caso de error
    }
  }

  // Método para obtener un Tarea por su ID

  public async obtenerTareaPorId(id: number) {
    const connection = ConectorDB.getConexion();
    const query = 'SELECT * FROM Tarea WHERE id = ?'; // Consulta con cláusula WHERE
    try {
      const tarea: Tarea = new Tarea();
      // Ejecutar la consulta con el ID como parámetro
      const [rows]: [RowDataPacket[], unknown] = await connection.promise().query(query, [id]);

      if (rows.length === 0) {
        console.log(`No se encontró ningún Tarea con ID ${id}`);
        return null;
      }
      const primerResultado = rows.shift(); // Obtener el primer resultado
      if (primerResultado) {
        tarea.setId(primerResultado.id);
        tarea.setNombre(primerResultado.nombre);
        // Otros campos que quieras asignar al objeto Tarea
      }
      console.log(Tarea);

      return Tarea;
    } catch (error) {
      console.error('Error al obtener el Tarea por ID:', error);
      return null; // Devolver null en caso de error
    }
  }

  // Método para eliminar un Tarea por su ID
  public async eliminarTareaPorId(id: number) {
    const connection = ConectorDB.getConexion();
    const query = 'DELETE FROM Tarea WHERE id = ?'; // Consulta con cláusula WHERE

    try {
      // Ejecutar la consulta con el ID como parámetro
      const [rows, _] = await connection.promise().query(query, [id]);
      console.log('Tarea eliminado ID:' + rows);
      // Devolver el objeto Tarea encontrado
    } catch (error) {
      console.error('Error al obtener el Tarea por ID:', error);
      return null; // Devolver null en caso de error
    }
  }


  // Método para actualizar un Tarea
  public async actualizarTarea(tarea:Tarea) {
    const connection = ConectorDB.getConexion();
    const query = 'UPDATE Tarea SET nombre = ? WHERE id = ?';
    try {
      console.log(query);
      const [result] = await connection.promise().query(query, [tarea.getNombre(), tarea.getId()]);
  
      if ((result as ResultSetHeader).affectedRows > 0) {
        console.log('Tarea actualizado exitosamente.');
        return true; // La actualización fue exitosa
      } else {
        console.log(tarea.getId());
        
         console.log((result as ResultSetHeader).info);
         
        console.log('El Tarea con ID ' + tarea.getId() + ' no fue encontrado.');
        return false; // No se encontró el Tarea con el ID dado
      }
    } catch (error) {
      console.error('Error al actualizar el Tarea:', error);
      return false; // Error al ejecutar la consulta
    }
  }
  
  

}

export default MTarea;