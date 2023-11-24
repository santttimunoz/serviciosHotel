export async function Post(){
    let url="https://servicios-hotel.vercel.app/"
    let peticion={
        method:"POST",        
    }
    let respuesta = await fetch(url, peticion)
    return respuesta.json()
}