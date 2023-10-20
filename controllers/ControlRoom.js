import { ServicioRoom } from "../services/ServicioRoom.js";
export class ControlHabitacion{
    constructor(){       
    } 
        async buscarHabitaciones(request, response){
            try {
              let servicioRoom = new ServicioRoom()
                 response.status(200).json({
                   'estado': true,
                   'mensaje': 'exito en busacar los datos',
                   'datos': await servicioRoom.BuscarRoomes()
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
                  'datos': await servicioRoom.BuscarRoomPorId()
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
                 //poner los mensajes que retorna el await dentro del mensajeExito
                 response.status(200).json({                  
                   'mensajeExito': "exito buscando los datos",
                   'datos': "aca los datos",
                 });
            } catch (error) {
                response.status(400).json({
                  mensaje: "fallamos" + error,
                });
            }
        }
        async eliminarRoom(request, response){
          //realizar la funcionalidad de este servicio(tarea)
            try {
              let ServicioRoom = new ServicioRoom()
                 let id = request.params.id;
                 response.status(200).json({
                   mensaje: "exito buscando los datos",
                   datos: "aca los datos",
                 });
            } catch (error) {
                response.status(400).json({
                  mensaje: "fallamos" + error,
                });
            }
        }
        async registrarRoom(request, response){
             try {
              let servicioRoom = new ServicioRoom()
               let data = request.body;
               //tomar las 2 fechas del objeto data(tarea)
               //entregar la diferencia en dias de esas dos fechas
               //await servicioRoom.registrarRoom(data)
               response.status(200).json({
                 mensaje: "exito buscando los datos",
                 datos: data,
               });
             } catch (error) {
               response.status(400).json({
                 mensaje: "fallamos" + error,
               });
             }
        }
}