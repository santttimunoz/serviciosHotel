//este es necesario para enceder el servidor(forma distinta de importar)
import express from "express";
import { rutasAPI } from "./routes/rutasH.js"
import { establecerConexionDB } from "./database/conexion.js";

//esta clase representa un servidor
export class Api {
  constructor() {
    this.app = express()
    this.conectarBD()
    this.procesarPeticiones()    
  }
  //1- levantar el servidor
  levantarServidor() {
    this.app.listen(4000, function () {
      console.log("servirdor encendido");
    });
  }
  //2- antender y responder peticiones
  procesarPeticiones() {  
    //esta linea define un middleware que convierte los datos a JSON para que la app los pueda manejar
    this.app.use(express.json());   
    //esta linea define un middleware que asocia las rutas definidas en rutasAPI con la raiz de mi aplicacion   
    this.app.use("/", rutasAPI)
  }
  //3- conectarse a la base de datos
  conectarBD(){    
    establecerConexionDB()
  }

}
