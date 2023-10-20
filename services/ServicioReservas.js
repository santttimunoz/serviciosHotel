import { modeloReserva } from "../models/modeloReserva"
class ServicioReservas{
    constructor(){

    }
    async BuscarReservas(){
        let reservas = new modeloReserva.find()
        return reservas
    }
    async BuscarReservasPorId(id){
        let reserva = new modeloReserva.findById(id)
        return reserva
    }
    async modificarReservas(id, data){
        return await modeloReserva.findByIdAndUpdate(id, data)
    }
    async eliminarReservas(id){
        let reservaNueva = new modeloReserva(id)
        return await reservaNueva.findByIdAndDelete(id)
    }
    async registrarReservas(data){
        let reservaNueva = new modeloReserva(data)
        return await reservaNueva.save
    }
}