import React from "react";

export default function BottonRedes(props){
    const {Icon, size, redirection, classname} = props;

    return (
        <div 
        onClick={()=>{
            window.open(redirection, '_blank');
        }}
        className = {classname}
        style={{
          padding: "12px",
          marginRight: "10px"
          
        }}>
          <Icon style={{fontSize:`${size}px`,color:"white"}} twoToneColor="#ffffff" />
        </div>
    );
}