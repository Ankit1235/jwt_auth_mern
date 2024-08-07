import { useAuth } from "../context/AuthContext";


const RegistrationFormHook = () => {

    const { Login } = useAuth();


    const registerUser = async (data : any) =>
    {
      
    try {
        const res = await fetch('http://localhost:4500/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        };
        const result = await res.json();
        Login(result.status, result.user);
        console.log(result);
        
      } catch (error) {
        console.error('Error:', error);
      };

    };

    return {registerUser}  ;

};

export default RegistrationFormHook;

