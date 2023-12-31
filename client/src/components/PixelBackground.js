import {Helmet} from "react-helmet";
import purple from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Purple_320x180.png";
import blue from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Blue_320x180.png";
import green from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Green_320x180.png";
import red from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Red_320x180.png";
import yellow from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Yellow_320x180.png";
import gray from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Gray_320x180.png";


function PixelBackground(props){

    var bg = gray;
    switch(props.color){
        default:
        case "purple":
            bg = purple;
            break;
        case "blue":
            bg = blue;
            break;
        case "green":
            bg = green;
            break;
        case "red":
            bg = red;
            break;
        case "yellow":
            bg = yellow;
            break;
        case "gray":
            bg = gray;
            break;
    }

    return(
        <Helmet>
        <style type="text/css">{`
            html, body {
                background: url(`+bg+`);
                background-repeat: no-repeat;
                background-size: cover;
                background-attachment: fixed;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
                width: 100vw;
                height: 100vh;
            }
        `}</style>
        <body data-bs-theme={props.color}/>
        </Helmet>
    );
}

export default PixelBackground;