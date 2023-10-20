export class ControlReserva{
    constructor(){        
    }
        async BuscarReservas(request, response){
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
        async BuscarReservaPorId(request, response){
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
        async modificarReserva(request, response){
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
        async eliminarReserva(request, response){
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
        async registrarReserva(request, response){
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