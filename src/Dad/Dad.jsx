import Brother from '../GrandPa/Brother/Brother';
import Myself from '../GrandPa/Brother/Sister/Myself/Myself';
import Sister from '../GrandPa/Brother/Sister/Sister';
const Dad = ({have}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section style={{display: 'flex'}}>
                <Myself have={have}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;