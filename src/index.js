import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";

const Isincongnited = (props) =>{

  // useEffect(()=>{
  //   var agent = navigator.userAgent;
  //   console.log(agent);
  //   (async ()=>{
  //     // try {
  //     //   const response = await axios.get('https://api.ipify.org?format=json');
  //     //   alert(`docxiado tu ip: `+ response.data.ip);
        
  //     // } catch (error) {
  //     //   console.error(error);
  //     // }
  //     try {
  //       const response = await axios.get('http://localhost:9000/genetic/');
  //       console.log(response.data)
  //       alert(`docxiado tu ip: `+ response.data);
        
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // },[])

  return <App />
}



ReactDOM.render(
  <React.StrictMode>
    <Isincongnited/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
