import ConectorDB from "../iglesiaDB";

 
class MAporte {

 

  static async crearAporte(nuevoAporte: any) {
    try {
      const connection =  ConectorDB.getConexion();
      if (!connection) {
        console.error('No se pudo obtener la conexión a la base de datos.');
        return;
      }

      const query = 'INSERT INTO Aporte (monto, fecha, persona_id, evento_id) VALUES (?, ?, ?, ?)';
      await connection.execute(query, [nuevoAporte.monto, nuevoAporte.fecha, nuevoAporte.personaId, nuevoAporte.eventoId]);
      console.log('Aporte creado exitosamente.');
    } catch (error) {
      console.error('Error al crear el aporte:', error);
    }
  }

  static async obtenerAportes() {
    try {
      const connection =  ConectorDB.getConexion();
      if (!connection) {
        console.error('No se pudo obtener la conexión a la base de datos.');
        return [];
      }

      const query = 'SELECT * FROM Aporte';
      const [rows] = await connection.execute(query);
      const aportes = rows.map((aporte: any) => new Aporte(aporte.id, aporte.monto, aporte.fecha, aporte.persona_id, aporte.evento_id));
      return aportes;
    } catch (error) {
      console.error('Error al obtener los aportes:', error);
      return [];
    }
  }

  static async obtenerAportePorId(id: number) {
    try {
      const connection =  ConectorDB.getConexion();
      if (!connection) {
        console.error('No se pudo obtener la conexión a la base de datos.');
        return null;
      }

      const query = 'SELECT * FROM Aporte WHERE id = ?';
      const [rows] = await connection.execute(query, [id]);
      const aporte = rows[0];
      if (!aporte) {
        console.log('No se encontró ningún aporte con ese ID.');
        return null;
      }
      return new Aporte(aporte.id, aporte.monto, aporte.fecha, aporte.persona_id, aporte.evento_id);
    } catch (error) {
      console.error('Error al obtener el aporte:', error);
      return null;
    }
  }

  static async actualizarAporte(id: number, monto: number, fecha: string, personaId: number, eventoId: number) {
    try {
      const connection = ConectorDB.getConexion();
      if (!connection) {
        console.error('No se pudo obtener la conexión a la base de datos.');
        return;
      }

      const query = 'UPDATE Aporte SET monto = ?, fecha = ?, persona_id = ?, evento_id = ? WHERE id = ?';
      await connection.execute(query, [monto, fecha, personaId, eventoId, id]);
      console.log('Aporte actualizado exitosamente.');
    } catch (error) {
      console.error('Error al actualizar el aporte:', error);
    }
  }

  static async eliminarAporte(id: number) {
    try {
      const connection = ConectorDB.getConexion();
      if (!connection) {
        console.error('No se pudo obtener la conexión a la base de datos.');
        return;
      }

      const query = 'DELETE FROM Aporte WHERE id = ?';
      await connection.execute(query, [id]);
      console.log('Aporte eliminado exitosamente.');
    } catch (error) {
      console.error('Error al eliminar el aporte:', error);
    }
  }
}

export default MAporte;
