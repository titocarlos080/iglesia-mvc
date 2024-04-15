class Persona {
  id :Number
nombre:String 
fechaNacimiento:Date
sexo:String 
idPadre:Number
idMadre:Number
idCargo:Number
    constructor(id, nombre, fechaNacimiento, sexo, idPadre, idMadre, idCargo) {
      this.id = id;
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
      this.sexo = sexo;
      this.idPadre = idPadre;
      this.idMadre = idMadre;
      this.idCargo = idCargo;
    }
  
    // Getters
    get getId() {
      return this.id;
    }
  
    get getNombre() {
      return this.nombre;
    }
  
    get getFechaNacimiento() {
      return this.fechaNacimiento;
    }
  
    get getSexo() {
      return this.sexo;
    }
  
    get getIdPadre() {
      return this.idPadre;
    }
  
    get getIdMadre() {
      return this.idMadre;
    }
  
    get getIdCargo() {
      return this.idCargo;
    }
  
    // Setters
    set setId(newId) {
      this.id = newId;
    }
  
    set setNombre(newNombre) {
      this.nombre = newNombre;
    }
  
    set setFechaNacimiento(newFechaNacimiento) {
      this.fechaNacimiento = newFechaNacimiento;
    }
  
    set setSexo(newSexo) {
      this.sexo = newSexo;
    }
  
    set setIdPadre(newIdPadre) {
      this.idPadre = newIdPadre;
    }
  
    set setIdMadre(newIdMadre) {
      this.idMadre = newIdMadre;
    }
  
    set setIdCargo(newIdCargo) {
      this.idCargo = newIdCargo;
    }
  
    // Método toString
    toString() {
      return `Persona - ID: ${this.id}, Nombre: ${this.nombre}, Fecha Nacimiento: ${this.fechaNacimiento}, Sexo: ${this.sexo}, ID Padre: ${this.idPadre}, ID Madre: ${this.idMadre}, ID Cargo: ${this.idCargo}`;
    }
  }
  
   