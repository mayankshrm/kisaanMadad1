import React, { useState,useEffect } from "react";
import Axios from "axios";

const Farmer = () => {
  const [FormData, setFormData] = useState({name:"",location:"",Quantity:"",availability:"",price:"",contact:""});

  const handleSubmit= async (e)=>{
    e.preventDefault();
console.log(FormData);

const {name,location,Quantity,availability,price,contact}=FormData;

Axios.post("/farmers",{
  name:name,location:location,Quantity:Quantity,availability:availability,price:price,contact:contact
}).then(res=>console.log("success")).catch(err=>console.log(err));



  }
  return (
    <>  
      <h2 className="text-center">Farmer page</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Name of Products</label>
            <input
              name="name_of_Products"
              class="form-control"
              label="name_of_products"
              value={FormData.name}
              onChange={(e)=>setFormData({...FormData,name:e.target.value})}
            ></input>

<label>Location</label>
            <input
              name="name_of_Products"
              class="form-control"
              label="name_of_products"
              value={FormData.location}
              onChange={(e)=>setFormData({...FormData,location:e.target.value})}
            ></input>

<label>Quantity</label>
            <input
              name="name_of_Products"
              class="form-control"
              label="name_of_products"
              value={FormData.Quantity}
              onChange={(e)=>setFormData({...FormData,Quantity:e.target.value})}
            ></input>

<label>availability</label>
            <input
              name="name_of_Products"
              class="form-control"
              label="name_of_products"
              value={FormData.availability}
              onChange={(e)=>setFormData({...FormData,Availability:e.target.value})}
            ></input>

<label>Price</label>
            <input
              name="name_of_Products"
              class="form-control"
              label="name_of_products"
              value={FormData.price}
              onChange={(e)=>setFormData({...FormData,price:e.target.value})}
            ></input>

<label>Contact</label>
            <input
              name="name_of_Products"
              class="form-control"
              label="name_of_products"
              value={FormData.Contact}
              onChange={(e)=>setFormData({...FormData,Contact:e.target.value})}
            ></input>
          </div>
          <br/>
          <div className="form-group form button ">
            <input type="submit" name="submit" id="submit" className="form-submit"
            value="register"  />
          </div>
          <br/>
          <button type="button" class="btn btn-dark" onClick={()=>window.location="/"}>back</button>
        </form>
      </div>
    </>
  );
};

export default Farmer;
