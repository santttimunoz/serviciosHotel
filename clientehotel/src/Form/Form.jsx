export function Form() {
  return (
    <>
      <form action="">
        <div className="row">
          <div className="col-12 col-md-6">
            <div class="mb-3">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />              
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div className="col-12 col-md-6">
            <div class="mb-3">
              <label for="exampleInputEmail1">username</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />              
            </div>
          </div>
          </div>
        </div>
        <div className="row"></div>
      </form>
    </>
  );
}
