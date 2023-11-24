import { useState } from "react"
export function Form() {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [foto, setFoto] = useState("")
    const [precioNoche, setPrecioNoche] = useState("")
    const [dateIn, setDateIn] = useState("")
    const [dateOut, setDateOut] = useState("")
    const [descripcion, setDescripcion] = useState("")

  
     function Post(){
        try {
            let url="https://servicios-hotel.vercel.app/"
        let peticion={
            method:"POST", 
            body:{
                name,
                number,
                foto,
                precioNoche,
                dateIn,
                dateOut,
                descripcion
            }       
        }
        let respuesta =  fetch(url, peticion)
        return respuesta.json()

        } catch (error) {
            throw new Error("problema enviando: "+error.message)
        }
        
    }

  return (
    // <>
    //   <form action="">
    //     <div className="row">
    //       <div className="col-12 col-md-6">
    //         <div class="mb-3">
    //           <label for="exampleInputEmail1">Email address</label>
    //           <input
    //             type="email"
    //             class="form-control"
    //             id="exampleInputEmail1"
    //             aria-describedby="emailHelp"
    //             placeholder="Enter email"
    //           />              
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-6">
    //       <div className="col-12 col-md-6">
    //         <div class="mb-3">
    //           <label for="exampleInputEmail1">username</label>
    //           <input
    //             type="email"
    //             class="form-control"
    //             id="exampleInputEmail1"
    //             aria-describedby="emailHelp"
    //             placeholder="Enter email"
    //           />              
    //         </div>
    //       </div>
    //       </div>
    //     </div>
    //     <div className="row"></div>
    //   </form>
    // </> 
    <>
    <div className="container ">
                <form>                   
                    <div className='d-flex'>
                        <div className="col-2 mb-3 me-2">
                            <label for="" className="form-label text-light">Name</label>
                            <input type="email" className="form-control" id="" aria-describedby="emailHelp" value={name}
                            onChange={(name)=>setName(name)}placeholder='enter Name'/>
                        </div>
                        <div className="col-2 mb-3">
                            <label for="" className="form-label text-light">phone</label>
                            <input type="number" className="form-control text-light" id="" placeholder='enter phone'
                            onChange={(number)=>setNumber(number)} value={number}/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-2 mb-3 me-2">
                            <label for="" className="form-label text-light">foto</label>
                            <input type="file" className="form-control" id=""  placeholder='foto'
                            onChange={(foto)=>setFoto(foto)} value={foto}/>
                        </div>
                        <div className="col-2 mb-3">
                        <label for="" className="form-label text-light">precioNoche</label>
                        <input type="number" placeholder="enter price"
                        onChange={(precioNoche)=>setPrecioNoche(5)} value={precioNoche}/>                           
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-2 mb-3 me-2">
                            <label for="" className="form-label text-light">dateIn</label>
                            <input type="date" className="form-control " id=""  
                            onChange={(dateIn)=>setDateIn(dateIn)} value={dateIn}/>
                        </div>
                        <div className="col-2 mb-3">
                            <label for="" className="form-label text-light">dateOut</label>
                            <input type="date" className="form-control" id=""
                            onChange={(dateOut)=>setDateOut(dateOut)} value={dateOut}/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-4 mb-3">
                            <label htmlFor="" className="text-light">descripcion</label>
                            <input type="text" className="form-control"
                            onChange={(descripcion)=>setDescripcion(descripcion)} value={descripcion}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={Post}>Enviar</button>
                </form>
            </div>
        </>
  );
}
