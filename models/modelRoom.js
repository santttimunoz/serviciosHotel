import mongoose from 'mongoose'

const Schema = mongoose.Schema

const habitacion = new Schema({
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
    },
    fechaInicio:
    {
        type: Date,
        required:true
    },
    fechaFin:
    {
        type: Date,
        required:true
    }
    
})

export const modelRoom = mongoose.model('habitaciones', habitacion)
