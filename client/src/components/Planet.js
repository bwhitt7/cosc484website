import "../styles/planets.css";
import Axios from "axios";
import PixelBackground from "./PixelBackground";


function Planet(props) {

    const addXP = (xp) => {
        Axios.post("addXP", {xp})
        .then((res) => {
            console.log(res);
            alert("+"+xp+" XP");
        });
    }




    const getParagraphs = () => {
        var html = "";
        props.info.forEach((element, i) => {
            html+= "<p>"+element+"</p>";
        })
        return html;
    };

    return(
        <div className="planet container">
            
            <PixelBackground color={props.color}></PixelBackground>

            <h1 className="text-center">{props.name}</h1>
                <div className="row mb-3 mx-0">

                    <div className={"col-4 "+props.shortname+"-profile-image"}>
                    </div>

                    <div className="col-8">
                    <table className="table table-striped table-bordered">
                        <tbody>
                            {props.table.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.name}</th>
                                        <td>{data.value}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="card p-4 m-0">
                    {props.info.map((data) => {
                        return (
                            <p>{data}</p>
                        )
                    })}
                </div>
        </div>
    );
}

export default Planet;