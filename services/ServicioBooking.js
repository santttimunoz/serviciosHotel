import { modeloReserva } from "../models/modelBooking.js"
export class ServicioBooking{
    constructor(){

    }
    async BuscarReservas(){
        let reservas =  modeloReserva.find()
        return reservas
    }
    async BuscarReservasPorId(id){
        let reserva =  modeloReserva.findById(id)
        return reserva
    }
    async modificarReservas(id, data){
        return await modeloReserva.findByIdAndUpdate(id, data)
    }
    async eliminarReservas(id){        
        return await modeloReserva.findByIdAndDelete(id)
    }
    async registrarReserva(data){
        let reservaNueva = new modeloReserva(data)
        await reservaNueva.save()
        return reservaNueva
    }
}