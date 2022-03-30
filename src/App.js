import React, { useState, useEffect } from "react";
import ListPlaces from "./components/ListPlaces/ListPlaces";
import Titlevoracion from "./components/titlevotacion/titlecoment"
import BasicLayout from "./layout/BasicLayout/BasicLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { getListPlaces, getToken } from "./config/places";
import "./assets/scss/global.scss";

function App() {
  const [listPlaces, setlistPlaces] = useState();

  useEffect(() => {
    (async () => {
      const response4 = await getToken();
      //console.log(response4);

      const response3 = await getListPlaces();
      //console.log(response3);

      setlistPlaces(response3);
    })();
  }, []);

  return (
    <BasicLayout>
      <Titlevoracion/>
      <div style={{height:"10px"}}/>
      <ListPlaces places={listPlaces} />
    </BasicLayout>
  );
}

export default App;
