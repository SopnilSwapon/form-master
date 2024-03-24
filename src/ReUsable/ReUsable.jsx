
const ReUsable = ({submitTitle, handleSubmit, submitBtnText='submit',children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data)
    }
    
    return (
        <div>
            <h2>{children}</h2>
             <form onSubmit={handleLocalSubmit}> 
                <input type="text"  name="name" placeholder="type your name"/>
                <br/>
                <input type="email" name="email" id="" placeholder="type your email" />
                <br />
                <input type="password" name="password" placeholder="type your password" />
                <br/>
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReUsable;