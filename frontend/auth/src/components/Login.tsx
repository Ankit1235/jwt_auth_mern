import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/LoginForm.css";

const LoginForm = () =>
{ 
    const { Login } = useAuth();
    const [data, setData] = useState({});
    const handleChange = (e : any) =>
    {
        setData({
            ...data,
            [e.target.name] : [e.target.value]
        })
    }

    const handleSubmit = (e : any) => {
        
        Login(data);  
    }


    return (

       

        <div className="LoginFormContainer">

            <form action="" method="post" onSubmit={handleSubmit} className="LoginForm">

                <input type="text" placeholder="Email" onChange={handleChange} name="email"/>
                
                <input type="text" placeholder="Password" name="password"/>

                <button type="submit">Submit</button>

            </form>


        </div>
    )
}

export default LoginForm;