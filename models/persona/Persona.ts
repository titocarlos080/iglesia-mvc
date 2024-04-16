class Persona {
 private id: Number
 private  nombre: string
 private fechaNacimiento: Date
 private sexo: string
 private  idPadre: Number
 private idMadre: Number
 private  idCargo: Number
  constructor(id?: Number, nombre?: string, fechaNacimiento?: Date, sexo?: string, idPadre?: Number, idMadre?: Number, idCargo?: Number) {
    this.id = id || 0;
    this.nombre = nombre || "";
    this.fechaNacimiento = fechaNacimiento || new Date();
    this.sexo = sexo || "";
    this.idPadre = idPadre || 0;
    this.idMadre = idMadre || 0;
    this.idCargo = idCargo || 0;
  }

  // Getters
  public   getId():Number {
    return this.id;
  }

  public   getNombre():string {
    return this.nombre;
  }

  public   getFechaNacimiento():Date {
    return this.fechaNacimiento;
  }

  public   getSexo():string {
    return this.sexo;
  }

  public   getIdPadre():Number {
    return this.idPadre;
  }

  public   getIdMadre():Number {
    return this.idMadre;
  }

  public   getIdCargo():Number {
    return this.idCargo;
  }

  // Setters
  public   setId(newId: Number) {
    this.id = newId;
  }

  public   setNombre(newNombre: string) {
    this.nombre = newNombre;
  }

  public   setFechaNacimiento(newFechaNacimiento: Date) {
    this.fechaNacimiento = newFechaNacimiento;
  }

  public   setSexo(newSexo: string) {
    this.sexo = newSexo;
  }

  public   setIdPadre(newIdPadre: Number) {
    this.idPadre = newIdPadre;
  }

  public   setIdMadre(newIdMadre: Number) {
    this.idMadre = newIdMadre;
  }

  public   setIdCargo(newIdCargo: Number) {
    this.idCargo = newIdCargo;
  }

  // Método toString
  toString() {
    return `Persona - ID: ${this.id}, Nombre: ${this.nombre}, Fecha Nacimiento: ${this.fechaNacimiento}, Sexo: ${this.sexo}, ID Padre: ${this.idPadre}, ID Madre: ${this.idMadre}, ID Cargo: ${this.idCargo}`;
  }
}

export default Persona;