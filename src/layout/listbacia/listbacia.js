import React from "react";

export default function Listbacia(){
    return (
        <div style={{width:"100%",
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center", 
                     height:"40vh"}}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection:"column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px"
                }}
            >
                <img className="imageagrade" src={require("../../assets/img/business-3d-girl-with-a-book.png")} alt="" />
                <div style={{height:"20px"}}/>
                <div
                    className="titleagradec"
                >No hay participantes</div>
                <div style={{height:"20px"}}/>
                <div style={{height:"10px"}}/>
                <div>
                    Seleccione otra categoria
                </div>
            </div>
        </div>
    );
}