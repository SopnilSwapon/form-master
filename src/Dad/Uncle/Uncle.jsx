import Cousin from "../../../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section>
                <Cousin name={'mizu'}></Cousin>
                <Cousin name={'Mim'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;