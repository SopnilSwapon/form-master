import { useContext } from "react";
import { RingContext } from "../../../GrandPa/GrandPa";

const Special = ({have}) => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h2>Special </h2>
            <p>Gift from GrandPa: <small style={{color:'blue'}}>{have}</small></p>
            <p>Also git from grandPa : {gift}</p>
        </div>
    );
};

export default Special;