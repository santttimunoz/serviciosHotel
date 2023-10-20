import { modelRoom } from "../models/modelRoom.js"

export class ServicioRoom{
    constructor(){

    }
    async buscarHabitaciones(){
        let habitaciones = new modelRoom.find()
        return habitaciones
    }
    async buscarHabitacionPorId(id){
        let habitacion = new modelRoom.findById(id)
        return habitacion        
    }
    async modificarHabitacion(id, data){
        return await modelRoom.findByIdAndUpdate(id, data)
    }
    async eliminarHabitacion(id){}
    async registrarHabitacion(data){
        let habitacionNueva = new modelRoom(data)
        return await habitacionNueva.save
    }
}