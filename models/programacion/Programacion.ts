class Programacion {

  id :Number
alabanzaPersona:String
lecturaBiblicaPersona:String
predicaPersona:String
tribunaLibre:String
eventoId = Number
    constructor(id, alabanzaPersona, lecturaBiblicaPersona, predicaPersona, tribunaLibre, eventoId) {
      this.id = id;
      this.alabanzaPersona = alabanzaPersona;
      this.lecturaBiblicaPersona = lecturaBiblicaPersona;
      this.predicaPersona = predicaPersona;
      this.tribunaLibre = tribunaLibre;
      this.eventoId = eventoId;
    }
  
    // Getters
    get getId() {
      return this.id;
    }
  
    get getAlabanzaPersona() {
      return this.alabanzaPersona;
    }
  
    get getLecturaBiblicaPersona() {
      return this.lecturaBiblicaPersona;
    }
  
    get getPredicaPersona() {
      return this.predicaPersona;
    }
  
    get getTribunaLibre() {
      return this.tribunaLibre;
    }
  
    get getEventoId() {
      return this.eventoId;
    }
  
    // Setters
    set setId(newId) {
      this.id = newId;
    }
  
    set setAlabanzaPersona(newAlabanzaPersona) {
      this.alabanzaPersona = newAlabanzaPersona;
    }
  
    set setLecturaBiblicaPersona(newLecturaBiblicaPersona) {
      this.lecturaBiblicaPersona = newLecturaBiblicaPersona;
    }
  
    set setPredicaPersona(newPredicaPersona) {
      this.predicaPersona = newPredicaPersona;
    }
  
    set setTribunaLibre(newTribunaLibre) {
      this.tribunaLibre = newTribunaLibre;
    }
  
    set setEventoId(newEventoId) {
      this.eventoId = newEventoId;
    }
  
    // Método toString
    toString() {
      return `Programacion - ID: ${this.id}, Alabanza Persona: ${this.alabanzaPersona}, Lectura Biblica Persona: ${this.lecturaBiblicaPersona}, Predica Persona: ${this.predicaPersona}, Tribuna Libre: ${this.tribunaLibre}, ID Evento: ${this.eventoId}`;
    }
  }
  
   