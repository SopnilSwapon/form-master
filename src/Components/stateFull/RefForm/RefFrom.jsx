import { useEffect, useRef } from "react";

const RefFrom = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    useEffect(()=> {
        nameRef.current.focus()
    },[])
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}> 
                <input ref={nameRef} type="text"  name="name" placeholder="type your name"/>
                <br />
                <input defaultValue={'sopnilswapon1@gmail.com'}  ref={emailRef} type="email" name="email" id="" placeholder="type your email" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;