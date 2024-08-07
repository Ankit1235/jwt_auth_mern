import { useState } from "react";
import "../styles/LoginForm.css";
import LoginHook from "../hook/LoginHook";

const LoginForm = () => { 
    const { userLogin } = LoginHook();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e:any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        userLogin(data);  
        
    };

    return (
        <div className="LoginFormContainer">
            <form onSubmit={handleSubmit} className="LoginForm">
                <input 
                    type="text" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    name="email" 
                    value={data.email}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    name="password" 
                    value={data.password}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;
