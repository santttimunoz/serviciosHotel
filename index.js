import { Api } from "./Api.js";
import "dotenv/config";
// console.log(process.env)
//creacion de objeto de la clase api
let server = new Api()

//el servidor es un intermediario(recibe y delega las peticiones)
server.levantarServidor()

server.procesarPeticiones()