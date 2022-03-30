import { FacebookOutlined,InstagramOutlined,YoutubeOutlined } from "@ant-design/icons";
import React from "react";
import { Carousel } from "react-bootstrap";
import useWindowDimensions from "../../config/useWindowDimensions";
import Time from "../Time/Time";

export default function Header(props) {

  const ImageLogo = () => {
    const { height, width } = useWindowDimensions();
    return (
      <img
          style={{
            width:`${width/4}px`,
            height: "auto"
          }}
          src={"https://xn--lacaa-rta.pe/wp-content/uploads/2021/07/flatnews-logo1.png"}
          alt="First slide"
      />
    );
  
  }

  const Infocontac = () => {
    const { height, width } = useWindowDimensions();
    let conten = (width < 500)?width/5:150; // contenedor de info
    let supesconte = (width < 500)?width/3:width/4;
    let sizeicon = (width < 500)? 12:20;
    console.log(supesconte/6)
    return (
        <div style={{
          height:"30px",
          width: `${conten}px`,
          display: "flex",
          flexDirection:"row",
          justifyContent: "left",
          alignItems:"center"

        }}>
          <div 
          className="facebookbtn"
          style={{
            height:`${supesconte/6}px`,
            width: `${supesconte/6}px`,
            
          }}>
            <FacebookOutlined style={{fontSize:`${sizeicon}px`,color:"white"}} twoToneColor="#ffffff" />
          </div>
          
          <div style={{width:`4px`}}/>
          
          <div 
          className="intagrambtn"
          style={{
            height:`${supesconte/6}px`,
            width: `${supesconte/6}px`,
          }}>
            <InstagramOutlined style={{fontSize:`${sizeicon}px`,color:"white"}} twoToneColor="#ffffff" />
          </div>
          <div style={{width:`4px`}}/>
          <div 
          className="youtubebtn"
          style={{
            height:`${supesconte/6}px`,
            width: `${supesconte/6}px`,
          }}>
            <YoutubeOutlined style={{fontSize:`${sizeicon}px`,color:"white"}} twoToneColor="#ffffff" />
          </div>
        </div>
    );
  
  }
  
  return (
    <div style={{
      background: "#189803",
      display: "flex",
      justifyContent: "space-between",
      alignItems:"center",
      padding:"15px"
    }}>
        <Infocontac/>
        <ImageLogo/>
        <Time />
    </div>
  );
}
