import React, { useState } from "react";

const Consumer=()=>{
    const [ConsumerData,setConsumerData]=useState("")
    return(
        <>
                <h2>Consumer</h2>
<form>

                <div className="container">
                <div class="form-group">
            
          <div class="form-group">
            <label>Name of Products</label>
            <input
              name="name_of_Products"
              class="form-control"
              label="name_of_products"
              value={ConsumerData}
              onChange={(e)=>setConsumerData(e.target.value)}
            ></input>
  <button type="submit" class="btn btn-primary">Search</button>
  <br />
  <button type="button" class="btn btn-dark" onClick={()=>window.location="/"}>back</button>
  </div>
  </div>
  </div>
</form>
  
  


                
        </>
    )
}

export default Consumer;
