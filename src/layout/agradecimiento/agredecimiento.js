import React from "react";

export default function Agradecimiento(){
    return(
        <div
            style={{
                width: "100%",
                height: "82vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
      >
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding:"15px",
          background:"",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius:"15px",
          margin: "20px"
        }}>
            <img className="imageagrade" src={require("../../assets/img/business-3d-girl-in-yellow-shirt-jumping.png")} alt="" />
          <div style={{height:"20px"}}/>
          <div
            className="titleagradec"
          >Gracias por tu participacion.</div>
          <div style={{height:"20px"}}/>
          <div onClick={()=>{   
              window.location.reload();
          }} className="botonarg" >Volver</div>
        </div>
      </div>
    );
}