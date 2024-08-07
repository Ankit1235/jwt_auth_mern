import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

const LoginHook = () =>
{
  const navigate = useNavigate();
    const {Login} = useAuth();
    const userLogin = async (values : any) =>
    {
        try {
        const res = await fetch('http://localhost:4500/api/auth/login',{
            method : 'POST',
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify(values)
        });
      
        const data = await res.json();
        console.log(res.status);
        if (res.status == 200) {
            Login(data.status, data.user);
            navigate('/dashboard');

      } else if (res.status === 400) {
        console.error("User not found!");
      } else {
        console.error('Registration failed!');
      }
    } catch (err: any) {
      
        console.error(err);
    } 
}
    return { userLogin };
}

export default LoginHook;
  
