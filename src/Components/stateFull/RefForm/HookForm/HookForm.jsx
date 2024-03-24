import useInputState from "../../../../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('rojoni')
    const emailState = useInputState('rojoni@sojoni.com');
    // console.log(nam);

    const handleSubmit = e => {
        console.log('form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                {/* <input type="text" value={name} onChange={handleNameChange}  name="name" placeholder="type your name"/> */}
                <br />
                <input {...emailState} type="email" name="email" id="" placeholder="type your email" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;