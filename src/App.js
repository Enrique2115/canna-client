import React, { useState, useEffect } from "react";
import ListPlaces from "./components/ListPlaces/ListPlaces";
import Time from "./components/Time/Time";
import BasicLayout from "./layout/BasicLayout/BasicLayout";
import "./assets/scss/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { getListPlaces, getToken } from "./config/places";

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
      <Time />
      <ListPlaces places={listPlaces} />
    </BasicLayout>
  );
}

export default App;
