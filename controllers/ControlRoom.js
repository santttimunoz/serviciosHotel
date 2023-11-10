import { ServicioRoom } from "../services/ServicioRoom.js";
export class ControlHabitacion{
    constructor(){       
    } 
        async buscarRooms(request, response){
            try {
              let servicioRoom = new ServicioRoom()
                 response.status(200).json({
                   'estado': true,
                   'mensaje': 'exito en busacar los datos',
                   'datos': await servicioRoom.buscarRooms()
                 });
            } catch (error) {
                response.status(400).json({
                  mensaje: "fallamos" + error,
                });
            }
        }
        async buscarRoomPorId(request, response){
            try {
              let servicioRoom = new ServicioRoom()
                let id = request.params.id;
                response.status(200).json({
                  'mensaje': "exito buscando los datos",
                  'datos': await servicioRoom.buscarRoomPorId(id)
                });
            } catch (error) {
                 response.status(400).json({
                   mensaje: "fallamos" + error,
                 });
            }
        }
       async modificarRoom(request, response){
            try {
              let servicioRoom = new ServicioRoom()
                 let id = request.params.id;
                 let data = request.body;                 
                 await servicioRoom.modificarRoom(id, data)                 
                 response.status(200).json({                  
                   'mensajeExito': "exito modificando los datos",
                   'datos': data ,//esta linea muestra los datos que retorna el await
                 });
            } catch (error) {
                response.status(400).json({
                  mensaje: "fallamos" + error,
                });
            }
        }
        async eliminarRoom(request, response){          
            try {
              let servicioRoom = new ServicioRoom()
                 let id = request.params.id;
                 await servicioRoom.eliminarRoom(id)
                 response.status(200).json({
                   mensaje: "exito eliminando los datos",
                   datos: "ID de la habitacion eliminada" + id,
                 });
            } catch (error) {
                response.status(400).json({
                  mensaje: "fallamos " + error,
                });
            }
        }
        async registrarRoom(request, response){
             try {
              let servicioRoom = new ServicioRoom()
               let data = request.body
               //tomar las 2 fechas del objeto data(tarea)
               let fechaInicio = new Date(data.fechaInicio)
               let fechaFin = new Date(data.fechaFin)
               //entregar la diferencia en dias de esas dos fechas               
               let diference = (Math.floor(fechaFin - fechaInicio) / (1000 * 60 * 60 * 24))
               await servicioRoom.registrarRoom(data)
               response.status(200).json({
                 mensaje: "exito registrando los datos",
                 datos: data,
                 diferenciaDias: diference
               });
             } catch (error) {
               response.status(400).json({
                 mensaje: "fallamos" + error,
               });
             }
        }
}