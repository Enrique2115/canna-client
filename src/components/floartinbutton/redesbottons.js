import React from "react";
import {Fab} from "@mui/material";

export function ButtonCenter(props){
    const {Icon,callback, estado, colorstade, size } = props;
    return(
        <Fab style={{
            background: `${(estado)?"white":colorstade}`
        }} onClick= {()=>{
            callback();
        }} className="floatbotonclick" size="medium" color="secondary" aria-label="add">
            {(estado)?<Icon style={{fontSize:`${size}px`,color:`${colorstade}`}} twoToneColor="#ffffff"/>:<Icon></Icon>}
        </Fab>
    );
}

export function ButtonOption(props){
    const {Icon,redireccion, colorstade, size } = props;
    return (
        <Fab style={{
            background: `${colorstade}`
        }} onClick={()=>{
            window.open(redireccion, '_blank');
        }} size="medium" color="secondary" aria-label="add">
            <Icon style={{fontSize:`${size}px`,color:"white"}} twoToneColor="#ffffff" />
        </Fab>
    );
}