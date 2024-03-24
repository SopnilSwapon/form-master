import { useContext } from "react";
import { RingContext } from "../../src/GrandPa/GrandPa";

const Friend = () => {
    const gift = useContext(RingContext);
    return (
        <div>
            <h2>Friend</h2>
            <p>has: {gift}</p>
        </div>
    );
};

export default Friend;