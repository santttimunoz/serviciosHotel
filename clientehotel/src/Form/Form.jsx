export function Form() {
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
                            <input type="email" className="form-control" id="" aria-describedby="emailHelp" placeholder='enter Name'/>
                        </div>
                        <div className="col-2 mb-3">
                            <label for="" className="form-label text-light">phone</label>
                            <input type="number" className="form-control text-light" id="" placeholder='enter phone'/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-2 mb-3 me-2">
                            <label for="" className="form-label text-light">foto</label>
                            <input type="file" className="form-control" id=""  placeholder='enter password'/>
                        </div>
                        <div className="col-2 mb-3">
                        <label for="" className="form-label text-light">precioNoche</label>
                           <select name="" id="" className='form-select '>                            
                            <option selected value="Admin">Admin</option>
                            <option value="User">User</option>
                           </select>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-2 mb-3 me-2">
                            <label for="" className="form-label text-light">dateIn</label>
                            <input type="date" className="form-control " id=""  />
                        </div>
                        <div className="col-2 mb-3">
                            <label for="" className="form-label text-light">dateOut</label>
                            <input type="date" className="form-control" id=""/>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className="col-4 mb-3">
                            <label htmlFor="" className="text-light">descripcion</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </>
  );
}
