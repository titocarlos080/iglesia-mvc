import ConectorDB from "../iglesiaDB";

  
class MCargo {
  // Método para crear un nuevo cargo
   static async crearCargo(nuevoCargo) {
   const connection = ConectorDB.getConexion();
    const query = 'INSERT INTO Cargo (id, nombre) VALUES (?, ?)';
    try {
      await connection.execute(query, [nuevoCargo.id, nuevoCargo.nombre]);
      console.log('Cargo creado exitosamente.');
    } catch (error) {
      console.error('Error al crear el cargo:', error);
    }
  }

  // Método para obtener todos los cargos
  static async obtenerCargos() {
    const connection = ConectorDB.getConexion();

    const query = 'SELECT * FROM Cargo';
    try {
      const result = await connection.execute(query);
      const cargos = result[0];
      return cargos.map(cargo => new Cargo(cargo.id, cargo.nombre));
    } catch (error) {
      console.error('Error al obtener los cargos:', error);
      return [];
    }
  }

  // Método para obtener un cargo por su ID
  static async obtenerCargoPorId(id) {
    const connection = ConectorDB.getConexion();

    const query = 'SELECT * FROM Cargo WHERE id = ?';
    try {
      const result = await connection.execute(query, [id]);
      const cargo = result[0][0];
      if (!cargo) {
        console.log('No se encontró ningún cargo con ese ID.');
        return null;
      }
      return new Cargo(cargo.id, cargo.nombre);
    } catch (error) {
      console.error('Error al obtener el cargo:', error);
      return null;
    }
  }

  // Método para actualizar un cargo
  static async actualizarCargo(id, nombre) {
    const connection = ConectorDB.getConexion();

    const query = 'UPDATE Cargo SET nombre = ? WHERE id = ?';
    try {
      await connection.execute(query, [nombre, id]);
      console.log('Cargo actualizado exitosamente.');
    } catch (error) {
      console.error('Error al actualizar el cargo:', error);
    }
  }

  // Método para eliminar un cargo por su ID
  static async eliminarCargo(id) {
    const connection = ConectorDB.getConexion();

    const query = 'DELETE FROM Cargo WHERE id = ?';
    try {
      await connection.execute(query, [id]);
      console.log('Cargo eliminado exitosamente.');
    } catch (error) {
      console.error('Error al eliminar el cargo:', error);
    }
  }
}

 