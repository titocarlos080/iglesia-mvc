import express, { Express, Request, Response } from 'express';
import path from 'path'; // Importa el módulo 'path' para manejar rutas de archivos

import HomeController from './controller/HomeController';

class App {
  public app: Express;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.routes();
    this.views();
    this.static();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private views():void{
     // Establece la carpeta de vistas y el motor de plantillas
     this.app.set('views', path.join(__dirname, 'views'));
     this.app.set('view engine', 'ejs');
  } 
   private static():void{
    this.app.use(express.static(path.join(__dirname, 'public')));

  }

  private routes(): void {
    this.app.get('/', HomeController.index );
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`App running on port ${this.port}`);
    });
  }
}

export default App;
