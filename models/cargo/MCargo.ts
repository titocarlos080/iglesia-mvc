import ConectorDB from "../iglesiaDB";
import Cargo from "./Cargo";
import {   ResultSetHeader, RowDataPacket } from 'mysql2';
class MCargo {
  // Método para crear un nuevo cargo
  public async crearCargo(nuevoCargo: Cargo) {
    const connection = ConectorDB.getConexion();
    const query = 'INSERT INTO Cargo ( nombre) VALUES ( ?)';
    try {
      await connection.promise().query(query, [nuevoCargo.getNombre()]);
      console.log('Cargo creado exitosamente.');
    } catch (error) {
      console.error('Error al crear el cargo:', error);
    }
  }

  // Método para obtener todos los cargos
  public async obtenerCargos() {
    const connection = ConectorDB.getConexion();
    const query = 'SELECT * FROM Cargo';
    try {
      // Usar con.promise().query() para obtener una promesa
      const [rows, fields] = await connection.promise().query(query);


      return rows; // Devolver los resultados de la consulta
    } catch (error) {
      console.error('Error al obtener los cargos:', error);
      return []; // Devolver un array vacío en caso de error
    }
  }

  // Método para obtener un cargo por su ID

  public async obtenerCargoPorId(id: number) {
    const connection = ConectorDB.getConexion();
    const query = 'SELECT * FROM Cargo WHERE id = ?'; // Consulta con cláusula WHERE
    try {
      const cargo: Cargo = new Cargo();
      // Ejecutar la consulta con el ID como parámetro
      const [rows]: [RowDataPacket[], unknown] = await connection.promise().query(query, [id]);

      if (rows.length === 0) {
        console.log(`No se encontró ningún cargo con ID ${id}`);
        return null;
      }
      const primerResultado = rows.shift(); // Obtener el primer resultado
      if (primerResultado) {
        cargo.setId(primerResultado.id);
        cargo.setNombre(primerResultado.nombre);
        // Otros campos que quieras asignar al objeto Cargo
      }
      console.log(cargo);

      return cargo;
    } catch (error) {
      console.error('Error al obtener el cargo por ID:', error);
      return null; // Devolver null en caso de error
    }
  }

  // Método para eliminar un cargo por su ID
  public async eliminarCargoPorId(id: number) {
    const connection = ConectorDB.getConexion();
    const query = 'DELETE FROM Cargo WHERE id = ?'; // Consulta con cláusula WHERE

    try {
      // Ejecutar la consulta con el ID como parámetro
      const [rows, _] = await connection.promise().query(query, [id]);
      console.log('Cargo eliminado ID:' + rows);
      // Devolver el objeto Cargo encontrado
    } catch (error) {
      console.error('Error al obtener el cargo por ID:', error);
      return null; // Devolver null en caso de error
    }
  }


  // Método para actualizar un cargo
  public async actualizarCargo(id: Number, nombre: string) {
    const connection = ConectorDB.getConexion();
    const query = 'UPDATE Cargo SET nombre = ? WHERE id = ?';
    try {
      console.log(query);
      const [result] = await connection.promise().query(query, [nombre, id]);
  
      if ((result as ResultSetHeader).affectedRows > 0) {
        console.log('Cargo actualizado exitosamente.');
        return true; // La actualización fue exitosa
      } else {
        console.log(id);
        
         console.log((result as ResultSetHeader).info);
         
        console.log('El cargo con ID ' + id + ' no fue encontrado.');
        return false; // No se encontró el cargo con el ID dado
      }
    } catch (error) {
      console.error('Error al actualizar el cargo:', error);
      return false; // Error al ejecutar la consulta
    }
  }
  
  

}

export default MCargo;