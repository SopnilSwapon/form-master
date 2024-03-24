import { createContext } from "react";
import Dad from "../Dad/Dad";
import Aunty from "../Dad/Uncle/Aunty/Aunty";
import Uncle from "../Dad/Uncle/Uncle";
import "./GrandPa.css"
export const RingContext =  createContext('gold');
const GrandPa = () => {
   const have = "ring";
    return (
        <div className="grandPa">
            <h2>GrandPa</h2>
            <RingContext.Provider value="gold">
            <section style={{display: 'flex'}}>
                <Dad have={have}></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
            </RingContext.Provider>
        </div>
    );
};

export default GrandPa;