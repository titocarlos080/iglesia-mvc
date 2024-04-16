 
CREATE TABLE Cargo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL
);
CREATE TABLE Persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    id_padre INT NULL,
    id_madre INT NULL,
    id_cargo INT NULL,
    
    FOREIGN KEY (id_cargo) REFERENCES Cargo(id)
);
CREATE TABLE Matrimonio (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,
    id_esposo INT NOT NULL,
    id_esposa INT NOT NULL,
    FOREIGN KEY (id_esposo) REFERENCES Persona(id),
    FOREIGN KEY (id_esposa) REFERENCES Persona(id)
);
CREATE TABLE Evento (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    fecha DATETIME NOT NULL,
    descripcion TEXT
);
CREATE TABLE Aporte (
    id INT PRIMARY KEY AUTO_INCREMENT,
    monto DECIMAL(10, 2) NOT NULL,
    fecha DATETIME NOT NULL,
    id_persona INT NOT NULL,
    id_evento INT NOT NULL,
    FOREIGN KEY (id_persona) REFERENCES Persona(id),
    FOREIGN KEY (id_evento) REFERENCES Evento(id)
);
CREATE TABLE Tarea (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL 
    
);
 
CREATE TABLE Programacion (
    id_persona INT NOT NULL,
    id_tarea INT NOT NULL,
    id_evento INT NOT NULL,
    PRIMARY KEY(id_persona,id_evento),
    FOREIGN KEY (id_evento) REFERENCES Evento(id),
    FOREIGN KEY (id_tarea) REFERENCES Tarea(id) ,
    FOREIGN KEY (id_persona) REFERENCES Persona(id) 
)
