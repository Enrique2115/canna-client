import React from "react";

export default function Iitleinfo (props){
    return (<div
        style={{
            height: "120px",
            width: "100%",
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center"
        }}
    >   
        <h3 className="title">A que participante <span className="titlesub">escojes?</span></h3>
    </div>);
};