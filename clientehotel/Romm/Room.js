import { useState, useEffect } from "react"
import { conectar } from "../services/conectar"

    const [rooms, setRooms] = useState(null)
    const [loading, setLoading] = useState(true)
conectar().then(function(respuesta){
   setRooms(respuesta)
   setLoading(false)
})

if (loading){
    return(
        <>
          <h1>loading</h1>
        </>
    )
}else{
    return (
        <>
            <div className="row">
                {
                    rooms.map(function (room) {


                        return (



                            <div className="col-md-2 my-2">
                                <div className="card" >
                                    <img className="card" src={url} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title h6">{}</h5>
                                        <audio controls src={} className="w-100"></audio>
                                    </div>
                                </div>
                            </div>




                        )

                    })
                }
            </div>
        </>
    )
}
