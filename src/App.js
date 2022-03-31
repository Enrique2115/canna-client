import React, { useState, useEffect } from "react";
import "./components/floartinbutton/floatting.scss";
import ListPlaces from "./components/ListPlaces/ListPlaces";
import Titlevoracion from "./components/titlevotacion/titlecoment"
import BasicLayout from "./layout/BasicLayout/BasicLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { getListPlaces, getToken } from "./config/places";
import "./assets/scss/global.scss";
import { borderRadius } from "@mui/system";
import Agredecimiento from "./layout/agradecimiento/agredecimiento"

function App() {
  const [listPlaces, setlistPlaces] = useState();
  const [votate, setvotate] = useState(false);

  useEffect(() => {
    (async () => {
      const response4 = await getToken();
      console.log(response4);

      const response3 = await getListPlaces();
      //console.log(response3);

      setlistPlaces(response3);
    })();
  }, []);

  const actualizateinterface = () =>{
    setvotate(!votate);
  }

  return (
    <BasicLayout>
     {(!votate)? <>
        <Titlevoracion/>
        <div style={{height:"10px"}}/>
        <ListPlaces places={listPlaces} callback={actualizateinterface} />
      </>:<Agredecimiento/>}
    </BasicLayout>
  );
}

export default App;
