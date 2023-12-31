//este es necesario para enceder el servidor(forma distinta de importar)
import express from "express"
import cors from "cors"
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
    this.app.listen(process.env.PORT, function () {
      console.log("servirdor encendido");
    });
  }
  //2- antender y responder peticiones
  procesarPeticiones() {  
    this.app.use(cors())
    this.app.use(express.json());      
    this.app.use("/", rutasAPI)
  }
  //3- conectarse a la base de datos
  conectarBD(){    
    establecerConexionDB()
  }

}
