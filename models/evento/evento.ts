class Evento {
    constructor(id, nombre, fecha, descripcion) {
      this.id = id;
      this.nombre = nombre;
      this.fecha = fecha;
      this.descripcion = descripcion;
    }
  
    // Getters
    get getId() {
      return this.id;
    }
  
    get getNombre() {
      return this.nombre;
    }
  
    get getFecha() {
      return this.fecha;
    }
  
    get getDescripcion() {
      return this.descripcion;
    }
  
    // Setters
    set setId(newId) {
      this.id = newId;
    }
  
    set setNombre(newNombre) {
      this.nombre = newNombre;
    }
  
    set setFecha(newFecha) {
      this.fecha = newFecha;
    }
  
    set setDescripcion(newDescripcion) {
      this.descripcion = newDescripcion;
    }
  
    // Método toString
    toString() {
      return `Evento - ID: ${this.id}, Nombre: ${this.nombre}, Fecha: ${this.fecha}, Descripción: ${this.descripcion}`;
    }
  }
  
  module.exports = Evento;
  