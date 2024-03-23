import { useState } from "react";

const StateFull = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e  => {
        e.preventDefault();
        if(password.length < 6){
            setError("Character must be 6 character or longer")
        }
        else{
            setError('')
            console.log(email, password, name);
        }

    };
    const handleNameChange = e => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input
                onChange={handleNameChange}
                type="text"  name="name" placeholder="type your name"/>
                <br />
                <input
                onChange = {handleEmailChange}
                type="email" name="email" id="" placeholder="type your email"  required/>
                <br />
                <input 
                onChange = {handlePassword}
                type="password" name="password" id=""  placeholder='type your password' /> 
                <br />
                <input  type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StateFull;