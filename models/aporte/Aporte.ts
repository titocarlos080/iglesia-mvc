
  class Aporte {
   private id: number;
   private monto: number;
   private fecha: Date;
   private personaId: number;
   private eventoId: number;

   constructor( id: number, monto: number, fecha: Date, personaId: number, eventoId: number    ) {
     this.id = id;
     this.monto = monto;
     this.fecha = fecha;
     this.personaId = personaId;
     this.eventoId = eventoId;
   }
 
   // Getters
  public   getId():number {
     return this.id;
   }
 
   public   getMonto():number {
     return this.monto;
   }
 
   public   getFecha():Date {
     return this.fecha;
   }
 
   public   getPersonaId():number {
     return this.personaId;
   }
 
   public   getEventoId():number {
     return this.eventoId;
   } 
   
   public   setId(id:number) {
     return this.id=id;
   }
 
   public   setMonto(monto:number)  {
     return this.monto= monto;
   }
 
   public   serFecha(fecha:Date)  {
     return this.fecha=fecha;
   }
 
   public   setPersonaId(personaId:number) {
     return this.personaId=personaId;
   }
 
   public   setEventoId(eventoId:number)  {
     return this.eventoId=eventoId;
   }
 
   
 
   // Método toString
   public toString():string {
     return `Aporte - ID: ${this.id}, Monto: ${this.monto}, Fecha: ${this.fecha}, ID Persona: ${this.personaId}, ID Evento: ${this.eventoId}`;
   }
 }
 
   export default Aporte;