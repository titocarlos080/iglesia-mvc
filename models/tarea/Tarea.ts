class Tarea {
    private id: number;
    private nombre: string;

    constructor(nombre?: string) {
        this.id = 0; // Puedes inicializar el id como 0 u otro valor por defecto
        this.nombre = nombre|| "";
    }

    // Getter y Setter para id
    public getId(): number {
        return this.id;
    }
    public setId(newId: number) {
        this.id = newId;
    }

    // Getter y Setter para nombre
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(newNombre: string) {
        this.nombre = newNombre;
    }

    // Método toString para imprimir detalles del cargo
    toString(): string {
        return `Cargo - ID: ${this.id}, Nombre: ${this.nombre}`;
    }
}



export default Tarea;



