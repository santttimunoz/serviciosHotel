import { modelRoom } from "../models/modelRoom.js"

export class ServicioRoom{
    constructor(){

    }
    async buscarRooms(){
        let habitaciones =  modelRoom.find()
        return habitaciones
    }
    async buscarRoomPorId(id){
        let habitacion =  modelRoom.findById(id)
        return habitacion        
    }
    async modificarRoom(id, data){
        return await modelRoom.findByIdAndUpdate(id, data)
    }
    async eliminarRoom(id){
        await modelRoom.findByIdAndDelete(id)
    }
    async registrarRoom(data){
        let habitacionNueva = new modelRoom(data)  
        await habitacionNueva.save()
        return habitacionNueva      
    }
}