
  class Aporte {
   id: Number;
   monto: Number;
   fecha: Date;
   personaId: Number;
   eventoId: Number;

   constructor(id: any, monto: any, fecha: any, personaId: any, eventoId: any) {
     this.id = id;
     this.monto = monto;
     this.fecha = fecha;
     this.personaId = personaId;
     this.eventoId = eventoId;
   }
 
   // Getters
   get getId() {
     return this.id;
   }
 
   get getMonto() {
     return this.monto;
   }
 
   get getFecha() {
     return this.fecha;
   }
 
   get getPersonaId() {
     return this.personaId;
   }
 
   get getEventoId() {
     return this.eventoId;
   }
 
   
 
   // Método toString
   toString() {
     return `Aporte - ID: ${this.id}, Monto: ${this.monto}, Fecha: ${this.fecha}, ID Persona: ${this.personaId}, ID Evento: ${this.eventoId}`;
   }
 }
 
  