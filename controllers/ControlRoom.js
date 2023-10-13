export class ControlHabitacion{
    constructor(){       
    } 
        BuscarHabitaciones(request, response){
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
        BuscarHabitacionPorId(request, response){
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
        modificarHabitacion(request, response){
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
        eliminarHabitacion(request, response){
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
        registrarHabitacion(request, response){
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