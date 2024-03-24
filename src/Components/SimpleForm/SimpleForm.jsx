
const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(e);
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text"  name="name" placeholder="type your name"/>
                <br />
                <input type="email" name="email" id="" placeholder="type your email" />
                <br />
                <input type="passwrod" name="password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;