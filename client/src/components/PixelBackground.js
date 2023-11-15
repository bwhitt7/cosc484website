import {Helmet} from "react-helmet";
import purple from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Purple_320x180.png";
import blue from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Blue_320x180.png";
import green from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Green_320x180.png";
import red from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Red_320x180.png";
import yellow from "../images/SpaceBG_PixelArt-Pack_FreeSample/1-Yellow_320x180.png";


function PixelBackground(props){

    var bg = purple;
    switch(props.color){
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
    }

    return(
        <Helmet>
        <style type="text/css">{`
            html, body {
                background: url(`+bg+`);
                background-repeat: no-repeat;
                background-size: cover;
                image-rendering: pixelated;
                image-rendering: -moz-crisp-edges;
                image-rendering: crisp-edges;
            }
        `}</style>
        </Helmet>
    );
}

export default PixelBackground;