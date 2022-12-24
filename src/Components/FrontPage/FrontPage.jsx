import React from "react";
import {} from "react-router-dom";


const FrontPage = () => {

 
    
  return (
    <>
      <nav class="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-center">Kisaan Madad</span>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage: `url("https://images.unsplash.com/photo-1485637701894-09ad422f6de6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWVycyUyMG1hcmtldHxlbnwwfHwwfHw%3D&w=1000&q=80")`,
          backgroundSize: "cover",

        }}
      >
      <div style={{backgroundColour:"black"}}>


        <h2 className="text-center">who are you? </h2>
        
        <button type="button" class="btn btn-dark mg " onClick={()=>window.location="/farmers"}>Farmer</button>
        <button type="button" class="btn btn-dark" onClick={()=>window.location="/consumers"}>Consumer</button>
        </div>
      </div>
    </>
  );
};

export default FrontPage;
