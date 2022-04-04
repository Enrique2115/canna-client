import React, { useState, useRef} from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function ListPlaces(props) {
  const {list,callback } = props;
  const [idstate, setidstate] = useState(1);
  const [currentScrollPossition, _] = useState(0);
  const [stadebackbutton, setstadebackbutton] = useState("none");
  const [stadesigbutton, setstadesigbutton] = useState("flex");

  const scrollref = useRef()

  // let contentitems = useRef()
  // const scrollcontent = useRef()
  
  const actualizar_stade = (id) =>{
    setidstate(id);
    callback(id);
    console.log(`${id} === ${idstate}`);
  }

  function valida_estado_scroll(){
    var maxScrollLeft = scrollref.current.scrollWidth - scrollref.current.clientWidth;
    // comprovamos si el escrol esta en la posicion 0 o no
    if(scrollref.current.scrollLeft !== 0){
      setstadebackbutton("flex");
    }else{
      setstadebackbutton("none");
    }
    // comprovamos si el escrol esta en la posicion maxima o no
    if(scrollref.current.scrollLeft < maxScrollLeft){
      setstadesigbutton("flex");
    }else{
      setstadesigbutton("none");
    }
  }

  function scrollHorizontall(vall) {
      let scrollAmount = 0;
      var selider = setInterval(()=>{
        scrollAmount += 10
        scrollref.current.scrollLeft += vall;
        valida_estado_scroll();

        console.log(scrollref.current.scrollLeft)
        if(scrollAmount >= 100){
          window.clearInterval(selider);
        }
      },25)
      //scrollcont.style.left = currentScrollPossition + "px";
      console.log(currentScrollPossition + "px");
  }
  
  

  return (
    <>
      <div style={{
          width:"100%",
          height: "30px",
          textAlign: "center",
          fontSize: "20px"
      }}>Seleccione la categoria donde votara</div>
      <div className="contentlistchipprincipal">
          {/* <div className="subtitlecategori">Seleccione a categoria a consultar o votar:</div> */}
        <div ref={scrollref} id="listarchispt" onScroll={()=>{
           valida_estado_scroll();
        }} className="list-categori">
        <div className="sig-content noselect" style={{
          display:  stadebackbutton
        }} onClick={()=>{
            scrollHorizontall(-10);
        }}>
          <LeftOutlined />
        </div>
        <div style={{
          display:stadesigbutton
        }} className="bac-content"  onClick={()=>{
            scrollHorizontall(10);
          }}>
            <RightOutlined />
          </div>
          <div id="containerchipst" className="container-item noselect">
            {list.map((item)=>{
                return (<Chips name={item.nombre} id={item.id} id_state={idstate} callback={actualizar_stade} />);
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function Chips(props) {
  const { name, id, id_state, callback } = props;

  // esta redundancia se da ya qe susede un bug al selecciona el primero, el cual nunca se selecciona pero los demas si
  return (
    (id !== id_state)?<div id={`item${id}`} onClick={()=>{
      callback(id)
    }} className= "item-categori noselect">
      {name}
    </div>: <div onClick={()=>{
      callback(id)
    }} className="item-categori-activa noselect">{name}</div>
  );
}
