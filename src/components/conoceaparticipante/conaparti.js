import React, { useState, useRef } from 'react';
import { Form, Input, message, Button, Space,Modal,Image } from "antd";
import { display } from '@mui/system';
import { getcategori } from "../../config/categori"

export default function Model(props){
    const {id,callback} = props;
    const [statemodel, setmodel] = useState();
    const [container, setcontainer] = useState({
      id: 0,
      nombre: "cevicherias",
      urlcode: "desconocido"
  });

    const cancel_update = ()=>{
        setmodel(false);
    }

    return (
        <>
          <div
            style={{
                width:"100%",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
          >
            <div className='bottonconoce' onClick={ async () => {
                //await loadplaintdata();
                let content = await getcategori(id);
                setcontainer(content);
                setmodel(true);
            }}>
                Conoce a nuestros participantes
            </div>
          </div>
          <Modal
            title={`Informacion de la categoria ${container.nombre}`}
            centered
            visible={statemodel}
            onOk={() => {
                setmodel(false);
                //document.getElementById(`updatedatapas${datos.id}`).click()
            }}
            onCancel={() => {
                cancel_update();
            }}
          >
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                {/* <div>{`categoria seleccionada ${id}`}</div> */}
                <div dangerouslySetInnerHTML={{__html: container.urlcode}}>
                  
                </div>
            </div>
          </Modal>
        </>
      );
}