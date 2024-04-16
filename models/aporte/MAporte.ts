import ConectorDB from "../iglesiaDB";
import Aporte from "./Aporte";


class MAporte {

  public async crearAporte(nuevoAporte: Aporte) {
    try {
      const connection = ConectorDB.getConexion();

      const query = 'INSERT INTO Aporte (monto, fecha, id_persona, id_evento) VALUES (?, ?, ?, ?)';
      await connection.promise().query(query, [nuevoAporte.getMonto(), nuevoAporte.getFecha(), nuevoAporte.getPersonaId(), nuevoAporte.getEventoId()]);
      console.log('Aporte creado exitosamente.' + nuevoAporte.toString());
    } catch (error) {
      console.error('Error al crear el aporte:', error);
    }
  }

  public async obtenerAportes() {
    try {
      const connection = ConectorDB.getConexion(); // Obtener la conexión a la base de datos
      const query = 'SELECT * FROM Aporte ';
      const resultados = await connection.promise().query(query);

      return resultados;
    } catch (error) {
      console.error('Error al obtener los aportes:', error);
    }
  }
  public async obtenerAportesDetallado() {
    try {
      const connection = ConectorDB.getConexion();
      const query = `
            SELECT
                a.id AS id_aporte,
                a.monto,
                a.fecha,
                p.id AS id_persona,
                p.nombre AS nombre_persona,
                e.id AS id_evento,
                e.nombre AS nombre_evento,
                e.fecha AS fecha_evento,
                e.descripcion AS descripcion_evento
            FROM Aporte a
            INNER JOIN Persona p ON a.id_persona = p.id
            INNER JOIN Evento e ON a.id_evento = e.id
        `;
      const [resultados] = await connection.promise().query(query);

      return resultados;
    } catch (error) {
      console.error('Error al obtener los aportes detallados:', error);
      return [];
    }
  }





  public async obtenerAportePorId(id: number) {
    try {
      const connection = ConectorDB.getConexion(); // Obtener la conexión a la base de datos
      const query = 'SELECT * FROM Aporte WHERE id=?';
      const resultados = await connection.promise().query(query, [id]);
      return resultados;
    } catch (error) {
      console.error('Error al obtener los aportes:', error);
    }
  }

  public async actualizarAporte(aporte: Aporte) {
    try {
      const connection = ConectorDB.getConexion();
      const query = 'UPDATE Aporte SET monto = ?, fecha = ?, id_persona = ?, id_evento = ? WHERE id = ?';
      await connection.promise().query(query, [aporte.getMonto(), aporte.getFecha(), aporte.getPersonaId(), aporte.getEventoId(), aporte.getId()]);
      console.log('Aporte actualizado exitosamente.');
    } catch (error) {
      console.error('Error al actualizar el aporte:', error);
    }
  }

  public async eliminarAporte(id: number) {
    try {
      const connection = ConectorDB.getConexion();
      const query = 'DELETE FROM Aporte WHERE id = ?';
      await connection.promise().query(query, [id]);
      console.log('Aporte eliminado exitosamente.');
    } catch (error) {
      console.error('Error al eliminar el aporte:', error);
    }
  }
}

export default MAporte;
