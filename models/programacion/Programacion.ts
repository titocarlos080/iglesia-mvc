
class Programacion {
  private id_evento: number;
  private id_persona: number;
  private id_tarea: number;
 
  constructor(id_evento: number, id_persona: number, tarea: number ) {
    this.id_evento = id_evento;
    this.id_persona = id_persona;
    this.id_tarea = tarea;
  }

  // Getters
  public getIdEvento(): number {
    return this.id_evento;
  }

  public getIDPersona(): number {
    return this.id_persona;
  }

  public getIDTarea(): number {
    return this.id_tarea;
  }

  // Setters
  public setIDPersona(id_persona: number): void {
    this.id_persona = id_persona;
  }
  public setIdEvento(id_evento: number): void {
    this.id_evento = id_evento;
  }

  public setIDTarea(tarea: number): void {
    this.id_tarea = tarea;
  }
}

export default Programacion;
