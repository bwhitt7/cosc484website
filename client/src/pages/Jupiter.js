import "../styles/planets.css";
import Planet from "./Planet";


function Jupiter() {

    return(
        <Planet
            name="Jupiter"
            color="red"
            table={[
                {name: "Radius", value: "71,500 km", id: 1},
                {name: "Mass", value: "1.9 * 10^27 kg", id: 2},
                {name: "Orbital Period", value: "11.8 years", id: 3},
                {name: "Rotational Period", value: "9.9 hours", id: 4},
                {name: "No. of Moons", value: "92", id: 5}
            ]}
            info={["Test", "Test2"]}
        
        ></Planet>
    );
}

export default Jupiter;