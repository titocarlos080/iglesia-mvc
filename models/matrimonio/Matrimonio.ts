class Matrimonio {
  private id:Number
  private fecha:Date
  private idEsposo: Number
  private idEsposa:Number
    constructor(id: Number, fecha: Date, idEsposo: Number, idEsposa: Number) {
      this.id = id;
      this.fecha = fecha;
      this.idEsposo = idEsposo;
      this.idEsposa = idEsposa;
    }
  
    // Getters
   public   getId():Number {
      return this.id;
    }
  
    public   getFecha():Date {
      return this.fecha;
    }
  
    public   getIdEsposo():Number {
      return this.idEsposo;
    }
  
    public   getIdEsposa():Number {
      return this.idEsposa;
    }
  
    // Setters
    public   setId(newId: Number ) {
      this.id = newId;
    }
  
    public    setFecha(newFecha: Date ) {
      this.fecha = newFecha;
    }
  
    public   setIdEsposo(newIdEsposo: Number ) {
      this.idEsposo = newIdEsposo;
    }
  
    public   setIdEsposa(newIdEsposa: Number ) {
      this.idEsposa = newIdEsposa;
    }
  
    // Método toString
    toString() {
      return `Matrimonio - ID: ${this.id}, Fecha: ${this.fecha}, ID Esposo: ${this.idEsposo}, ID Esposa: ${this.idEsposa}`;
    }
  }
  
   export default Matrimonio;