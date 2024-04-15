class Cargo {
id: number
nombre:String

    constructor(id, nombre) {
      this.id = id;
      this.nombre = nombre;
    }
  
    // Getter para obtener el id del cargo
    get getId() {
      return this.id;
    }
  
    // Setter para actualizar el id del cargo
    set setId(newId) {
      this.id = newId;
    }
  
    // Getter para obtener el nombre del cargo
    get getNombre() {
      return this.nombre;
    }
  
    // Setter para actualizar el nombre del cargo
    set setNombre(newNombre) {
      this.nombre = newNombre;
    }
  
    // Método toString para imprimir detalles del cargo
    toString() {
      return `Cargo - ID: ${this.id}, Nombre: ${this.nombre}`;
    }
  }
  
 
 