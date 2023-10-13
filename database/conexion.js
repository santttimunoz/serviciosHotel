import mongoose from "mongoose";

export async function establecerConexionDB(){
    //el trycatch sirve para el manejo de la exepcion(si por alguna razon no puede hacer conexion)
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log("exito")
    } catch (error) {
        console.log("error: "+error)
    }
}