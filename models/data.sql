CREATE TABLE Cargo (
    id INT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);
CREATE TABLE Persona (
    id INT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    sexo VARCHAR(1) NOT NULL,
    id_padre INT NULL,
    id_madre INT NULL,
    id_cargo INT NULL,
    FOREIGN KEY (id_padre) REFERENCES Persona(id),
    FOREIGN KEY (id_madre) REFERENCES Persona(id)
    FOREIGN KEY (id_cargo) REFERENCES Cargo(id)
);
CREATE TABLE Matrimonio (
    id INT PRIMARY KEY,
    fecha DATE NOT NULL,
    id_esposo INT NOT NULL,
    id_esposa INT NOT NULL,
    FOREIGN KEY (id_esposo) REFERENCES Persona(id),
    FOREIGN KEY (id_esposa) REFERENCES Persona(id)
);
CREATE TABLE Evento (
    id INT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    descripcion TEXT
);
CREATE TABLE Aporte (
    id INT PRIMARY KEY,
    monto DECIMAL(10, 2) NOT NULL,
    fecha DATE NOT NULL,
    persona_id INT NOT NULL,
    evento_id INT NOT NULL,
    FOREIGN KEY (persona_id) REFERENCES Persona(id),
    FOREIGN KEY (evento_id) REFERENCES Evento(id)
);
CREATE TABLE Programacion (
    id INT PRIMARY KEY,
    alabanza_persona INT NULL,
    lectura_biblica_persona INT NULL,
    predica_persona INT NULL,
    tribuna_libre VARCHAR NULL,
    evento_id INT NULL,
    FOREIGN KEY (evento_id) REFERENCES Persona(id),
    FOREIGN KEY (alabanza_persona) REFERENCES Persona(id),
    FOREIGN KEY (lectura_biblica_persona) REFERENCES Persona(id),
    FOREIGN KEY (predica_persona) REFERENCES Persona(id),
);