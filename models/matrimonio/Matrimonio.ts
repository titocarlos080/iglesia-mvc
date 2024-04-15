class Matrimonio {
  id:Number
  fecha:Date
  idEsposo: Number
  idEsposa:Number
    constructor(id, fecha, idEsposo, idEsposa) {
      this.id = id;
      this.fecha = fecha;
      this.idEsposo = idEsposo;
      this.idEsposa = idEsposa;
    }
  
    // Getters
    get getId() {
      return this.id;
    }
  
    get getFecha() {
      return this.fecha;
    }
  
    get getIdEsposo() {
      return this.idEsposo;
    }
  
    get getIdEsposa() {
      return this.idEsposa;
    }
  
    // Setters
    set setId(newId) {
      this.id = newId;
    }
  
    set setFecha(newFecha) {
      this.fecha = newFecha;
    }
  
    set setIdEsposo(newIdEsposo) {
      this.idEsposo = newIdEsposo;
    }
  
    set setIdEsposa(newIdEsposa) {
      this.idEsposa = newIdEsposa;
    }
  
    // Método toString
    toString() {
      return `Matrimonio - ID: ${this.id}, Fecha: ${this.fecha}, ID Esposo: ${this.idEsposo}, ID Esposa: ${this.idEsposa}`;
    }
  }
  
   