import { modeloHabitacion } from "../models/modeloHabitacion";

export class ServicioHabitacion{
    constructor(){

    }
    async BuscarHabitaciones(){
        let habitaciones = new modeloHabitacion.find()
        return habitaciones
    }
    async BuscarHabitacionPorId(id){
        let habitacion = new modeloHabitacion.findById(id)
        return habitacion        
    }
    async modificarHabitacion(id, data){
        return await modeloHabitacion.findByIdAndUpdate(id, data)
    }
    async eliminarHabitacion(id){}
    async registrarHabitacion(data){}
}