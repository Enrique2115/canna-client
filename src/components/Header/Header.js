import { FacebookOutlined,InstagramOutlined,YoutubeOutlined } from "@ant-design/icons";
import React from "react";
import { Carousel } from "react-bootstrap";
import useWindowDimensions from "../../config/useWindowDimensions";
import Time from "../Time/Time";
import Buttonredes from  "./redesbottons"

export default function Header(props) {

  const ImageLogo = () => {
    const { height, width } = useWindowDimensions();
    let sizeimage = (width < 500)?134:width/4;
    return (
      <img
          style={{
            width:`${sizeimage}px`,
            height: "auto"
          }}
          src={"https://xn--lacaa-rta.pe/wp-content/uploads/2021/07/flatnews-logo1.png"}
          alt="First slide"
      />
    );
  
  }

  const Infocontac = () => {
    const { height, width } = useWindowDimensions();
    let conten = (width < 500)?300:150; // contenedor de info
    let sizeicon = (width < 500)? 12:20;
    let contentdiv = <></>
    if ((width > 500)) contentdiv = (
      <div style={{
        height:"30px",
        width: `${conten}px`,
        display: "flex",
        flexDirection:"row",
        justifyContent: "left",
        alignItems:"center"
      }}>
        <Buttonredes classname={"facebookbtn"} Icon={FacebookOutlined} size = {sizeicon} redirection={"https://www.facebook.com/LaCa%C3%B1ape-Noticias-del-Valle-Chicama-101515225490691"} />
        <Buttonredes classname={"intagrambtn"} Icon={InstagramOutlined} size = {sizeicon} redirection={"https://www.instagram.com/noticiasdelvallechicama/"} />
        <Buttonredes classname={"youtubebtn"} Icon={YoutubeOutlined} size = {sizeicon} redirection={"https://www.youtube.com/channel/UCwLBk00dCxLQuR32Kh3sS2w"} />
      </div>
    );
    return contentdiv;
  
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
        <Time/>
    </div>
  );
}
