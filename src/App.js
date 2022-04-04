import React, { useState, useEffect } from "react";
import "./components/floartinbutton/floatting.scss";
import ListPlaces from "./components/ListPlaces/ListPlaces";
import Titlevoracion from "./components/titlevotacion/titlecoment"
import BasicLayout from "./layout/BasicLayout/BasicLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { getListPlaces, getToken } from "./config/places";
import "./assets/scss/global.scss";
import Agredecimiento from "./layout/agradecimiento/agredecimiento"
import Cargando from "./layout/cargando/cargando"
import Listcategori from "./components/ListCategoria/listcategoria"
import Listabacia from "./layout/listbacia/listbacia"
import Conoceaparticipante from "./components/conoceaparticipante/conaparti"
import { getListcategori } from "./config/categori";

function App() {
  const [listPlaces, setlistPlaces] = useState();
  const [votate, setvotate] = useState(false);
  const [idcategori, setidcategori] = useState(1);
  const [listhistoryPlaces, setlisthistoryPlaces] = useState();
  const [listCategori,setlistCategori] = useState([{id:1,nombre: "Default"}]);

  useEffect(() => {
    (async () => {
      const response = await getToken();
      console.log(response);
      // listar las categorias
      const response4 = await getListcategori();
      setlistCategori(response4);
      setidcategori(listCategori[0].id);
      // listar los participantes
      const response3 = await getListPlaces();
      setlistPlaces(response3);
      setlisthistoryPlaces(response3.filter(((item) =>{
          return item.id_categor === idcategori;
      })));

    })();
  }, []);

  const actualizateinterface = () =>{
    setvotate(!votate);
  }

  const actualizar_id_categori = (id) =>{
    setidcategori(id);
    setlisthistoryPlaces(listPlaces.filter(((item) =>{
      return item.id_categor === id;
    })));
  }

  return (
    <BasicLayout>
     {(!votate)? <>
        <div style={{height:"25px"}}/>
        <Titlevoracion/>
        <Conoceaparticipante id={idcategori}/>
        <div style={{height:"25px"}}/>
        <Listcategori list={listCategori} callback={actualizar_id_categori}/>
        <div style={{height:"5px"}}/>
        {(Array.isArray(listhistoryPlaces))?
              ((listhistoryPlaces.length !== 0)?
                <ListPlaces places={listhistoryPlaces} callback={actualizateinterface} />:
                <Listabacia/>):
                <Cargando/>}
      </>:<Agredecimiento/>}
    </BasicLayout>
  );
}

export default App;
