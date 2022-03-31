import React, { useState } from "react";
import { FacebookOutlined,InstagramOutlined,YoutubeOutlined,UpOutlined } from "@ant-design/icons";
import {Fab} from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import useWindowDimensions from "../../config/useWindowDimensions";
import { ButtonOption,ButtonCenter } from "./redesbottons";

export default function Floatingbutton(props){
    const [isclickbutton, setclickbutton] = useState(false);

    const clickbutton = ()=>{
        setclickbutton(!isclickbutton)
    }

    const Infocontac = () => {
        const { height, width } = useWindowDimensions();
        let sizeicon = (width < 500)? 20:10;
        let contentdiv = <></>
        let colorhijosbottons = "#4caf50"
        let conteninit = [
            <ButtonOption Icon={FacebookOutlined} 
                redireccion={"https://www.facebook.com/LaCa%C3%B1ape-Noticias-del-Valle-Chicama-101515225490691"} 
                colorstade = {colorhijosbottons}
                size = {sizeicon}
            />,
            <div style={{
                height: "5px"   
            }}/>,
            <ButtonOption Icon={InstagramOutlined} 
                redireccion={"https://www.instagram.com/noticiasdelvallechicama/"} 
                colorstade = {colorhijosbottons}
                size = {sizeicon}
            />,
            <div style={{
                height: "5px"
            }}/>,
            <ButtonOption Icon={YoutubeOutlined} 
                redireccion={"https://www.youtube.com/channel/UCwLBk00dCxLQuR32Kh3sS2w"} 
                colorstade = {colorhijosbottons}
                size = {sizeicon}
            />,
            <div style={{
                height: "5px"
            }}/>,
        ];
        if ((width < 500)) contentdiv = (
          <div className="floatbutton">
            {(isclickbutton)?conteninit:<></>}
            <ButtonCenter Icon={(isclickbutton)?UpOutlined:PublicIcon} 
                          callback={clickbutton} 
                          estado={isclickbutton} 
                          colorstade = {colorhijosbottons}
                          size = {sizeicon}
                          />

          </div>
        );
        return contentdiv;
      }

    return (<Infocontac></Infocontac>);

}