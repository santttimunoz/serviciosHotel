export async function conectar(){
    let url="https://servicios-hotel.vercel.app/"
    let peticion={
        method:"GET"
    }
    let respuesta = await fetch(url, peticion)
    return respuesta.json()
}