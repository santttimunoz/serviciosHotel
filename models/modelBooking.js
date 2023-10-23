import mongoose from "mongoose"

const Schema = mongoose.Schema

const reserva = new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    precioNoche:{
        type: Number,
        required:true
    }
})

export const modeloReserva = mongoose.model('reservas', reserva)