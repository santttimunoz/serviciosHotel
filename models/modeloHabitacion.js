import mongoose from mongoose

const schema = mongoose.schema

const Habitacion = new schema({
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

export const modeloHabitacion = mongoose.model('habitaciones', Habitacion)
