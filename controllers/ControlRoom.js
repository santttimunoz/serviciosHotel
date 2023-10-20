import { ServicioHabitacion } from "../services/ServicioHabitacion";
export class ControlHabitacion{
    constructor(){       
    } 
        async BuscarHabitaciones(request, response){
            try {
              let servicioHabitacion = new ServicioHabitacion()
                 response.status(200).json({
                   'estado': true,
                   'mensaje': 'exito en busacar los datos',
                   'datos': await servicioHabitacion.BuscarHabitaciones()
                 });
            } catch (error) {
                response.status(400).json({
                  mensaje: "fallamos" + error,
                });
            }
        }
        async BuscarHabitacionPorId(request, response){
            try {
              let servicioHabitacion = new ServicioHabitacion()
                let id = request.params.id;
                response.status(200).json({
                  'mensaje': "exito buscando los datos",
                  'datos': await servicioHabitacion.BuscarHabitacionPorId()
                });
            } catch (error) {
                 response.status(400).json({
                   mensaje: "fallamos" + error,
                 });
            }
        }
       async modificarHabitacion(request, response){
            try {
              let servicioHabitacion = new ServicioHabitacion()
                 let id = request.params.id;
                 let data = request.body;
                 await servicioHabitacion.modificarHabitacion(id, data)
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
        async eliminarHabitacion(request, response){
          //realizar la funcionalidad de este servicio(tarea)
            try {
              let ServicioHabitacion = new ServicioHabitacion()
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
        async registrarHabitacion(request, response){
             try {
              let servicioHabitacion = new ServicioHabitacion()
               let data = request.body;
               //tomar las 2 fechas del objeto data(tarea)
               //entregar la diferencia en dias de esas dos fechas
               await servicioHabitacion.registrarHabitacion(data)
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
}