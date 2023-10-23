import { ServicioBooking } from "../services/ServicioBooking.js";
export class ControlReserva{
    constructor(){        
    }
        async BuscarReservas(request, response){
            try {
              let servicioBooking = new ServicioBooking()              
              response.status(200).json({
                mensaje: "exito buscando los datos",
                datos: await servicioBooking.BuscarReservas(),
              });
            } catch (error) {
              response.status(400).json({
                mensaje: "fallamos" + error,
              });
            }
        }
        async BuscarReservaPorId(request, response){
            try {
              let servicioBooking = new ServicioBooking()
              let id = request.params.id  
              let data = request.body
              await servicioBooking.BuscarReservas(id)                       
              response.status(200).json({
                mensaje: "exito buscando la reserva",
                datos: data ,
              });
            } catch (error) {
              response.status(400).json({
                mensaje: "fallamos" + error,
              });
            }
        }
        async modificarReserva(request, response){
            try {
              let servicioBooking = new ServicioBooking()
              let id = request.params.id;
              let data = request.body;              
              await servicioBooking.modificarReservas(id, data)
              response.status(200).json({
                mensaje: "exito modificando los datos",
                datos: data,
              });
            } catch (error) {
              response.status(400).json({
                mensaje: "fallamos" + error,
              });
            }
        }
        async eliminarReserva(request, response){
            try {
              let servicioBooking = new ServicioBooking()
              let id = request.params.id;
              await servicioBooking.eliminarReservas(id)
              response.status(200).json({
                mensaje: "exito eliminado los datos",
                datos: "ID de la reserva eliminada: " + id,
              });
            } catch (error) {
              response.status(400).json({
                mensaje: "fallamos" + error,
              });
            }
        }
        async registrarReserva(request, response){
             try {
               let datos = request.body;
               let servicioBooking = new ServicioBooking()
               await servicioBooking.registrarReserva(datos)
               response.status(200).json({
                 mensaje: "exito guardando los datos",
                 datos: datos,
               });
             } catch (error) {
               response.status(400).json({
                 mensaje: "fallamos" + error,
               });
             }
        }
}