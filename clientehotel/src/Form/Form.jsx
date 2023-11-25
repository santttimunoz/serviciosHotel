import { useState } from "react"
export function Form() {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [foto, setFoto] = useState("")
    const [precioNoche, setPrecioNoche] = useState("")
    const [dateIn, setDateIn] = useState("")
    const [dateOut, setDateOut] = useState("")
    const [descripcion, setDescripcion] = useState("")

    function captureValue(set){               
        return event => set(event.target.value)
    }

     async function Post(event){
        event.preventDefault();
        try {
            let url="https://servicios-hotel.vercel.app/api/habitaciones"
        let peticion={
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                name :name,
                number: number,
                foto: foto,
                precioNoche: precioNoche,
                dateIn: dateIn,
                dateOut: dateOut,
                descripcion: descripcion
            })    
        }        
        let respuesta =  await fetch(url, peticion)       
        console.log("Respuesta recibida:", respuesta);
        if (!respuesta.ok) {
            throw new Error(`Error al enviar la solicitud: ${respuesta.status}`);
          }
          let data =  await respuesta.json()
          console.log("Datos recibidos:", data);   

        } catch (error) {
            throw new Error("problema enviando: "+error.message)
        }
        
    }

  return (    
    <>
    <div className="container ">
                <form>                   
                    <div className='d-flex'>
                        <div className="col-2 mb-3 me-2">
                            <label for="" className="form-label text-light">Name</label>
                            <input type="text" className="form-control" id="" value={name}
                            onChange={captureValue(setName)} placeholder='enter Name'/>
                        </div>
                        <div className="col-2 mb-3">
                            <label for="" className="form-label text-light">phone</label>
                            <input type="number" className="form-control" id="hola" placeholder='enter phone'
                            onChange={captureValue(setNumber)} value={number}/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-2 mb-3 me-2">
                            <label for="" className="form-label text-light">foto</label>
                            <input type="file" className="form-control" id=""  placeholder='foto'
                            onChange={captureValue(setFoto)} value={foto}/>
                        </div>
                        <div className="col-2 mb-3">
                        <label for="" className="form-label text-light">precioNoche</label>
                        <input type="number" placeholder="enter price" className="form-control"
                        onChange={captureValue(setPrecioNoche)} value={precioNoche}/>                           
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-2 mb-3 me-2">
                            <label for="" className="form-label text-light">dateIn</label>
                            <input type="date" className="form-control " id=""  
                            onChange={captureValue(setDateIn)} value={dateIn}/>
                        </div>
                        <div className="col-2 mb-3">
                            <label for="" className="form-label text-light">dateOut</label>
                            <input type="date" className="form-control" id=""
                            onChange={captureValue(setDateOut)} value={dateOut}/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-4 mb-3">
                            <label htmlFor="" className="text-light">descripcion</label>
                            <input type="text" className="form-control"
                            onChange={captureValue(setDescripcion)} value={descripcion}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={Post}>Enviar</button>
                </form>
            </div>
        </>
  );
}
