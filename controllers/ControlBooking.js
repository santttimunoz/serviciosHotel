export class ControlReserva{
    constructor(){        
    }
        BuscarReservas(request, response){
            try {
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
        BuscarReservaPorId(request, response){
            try {
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
        modificarReserva(request, response){
            try {
              let id = request.params.id;
              let datos = request.body;
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
        eliminarReserva(request, response){
            try {
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
        registrarReserva(request, response){
             try {
               let datos = request.body;
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