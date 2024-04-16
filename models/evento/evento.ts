class Evento {
   private id: Number;
   private nombre: string;
   private fecha: Date;
   private descripcion: string;
    constructor(id: Number, nombre: string, fecha: Date, descripcion: string) {
      this.id = id;
      this.nombre = nombre;
      this.fecha = fecha;
      this.descripcion = descripcion;
    }
  
    // Getters
    public    getId():Number {
      return this.id;
    }
  
    public   getNombre():string {
      return this.nombre;
    }
  
    public    getFecha():Date {
      return this.fecha;
    }
  
    public    getDescripcion():string {
      return this.descripcion;
    }
  
    // Setters
    public    setId(newId: Number) {
      this.id = newId;
    }
  
    public   setNombre(newNombre: string) {
      this.nombre = newNombre;
    }
  
    public   setFecha(newFecha: Date) {
      this.fecha = newFecha;
    }
  
    public   setDescripcion(newDescripcion: string) {
      this.descripcion = newDescripcion;
    }
  
    // Método toString
    toString() {
      return `Evento - ID: ${this.id}, Nombre: ${this.nombre}, Fecha: ${this.fecha}, Descripción: ${this.descripcion}`;
    }
  }
  
export default Evento;
  