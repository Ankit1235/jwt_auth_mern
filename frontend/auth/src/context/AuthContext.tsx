import { createContext, ReactNode, useContext, useEffect, useState } from "react";
const AuthContext = createContext<any>(null);
type AuthContextProviderProps = {
    children : ReactNode
};

const AuthContextProvider = ({ children } : AuthContextProviderProps) =>
{
    const [token, setToken] = useState<string | null >(null);
    const [userData, setUserData] = useState <any>(null);
    const [isUserAuthenticated, setUserAuthentication] = useState <boolean>(false);

    useEffect(() =>
    {
        const storedUserData = localStorage.getItem('user_data');
        if(storedUserData) {

            try {
                 const storedData = JSON.parse(storedUserData);
                 const {user_data, user_token} = storedData;
                 setToken(user_token);
                 setUserData(user_data);
                 setUserAuthentication(true);
                 

            } catch (error) {
                
                console.error(error);
            }
           
        }
        
    },[]);

  

    const Login = (newToken: string, newData: any) => {
        localStorage.setItem('user_data', JSON.stringify({ userToken: newToken, user: newData }));
        setToken(newToken);
        setUserData(newData);
        setUserAuthentication(true);
        
      };
    
      const Logout = () => {
       
        localStorage.removeItem('user_data');
        setToken(null);
        setUserData(null);
        setUserAuthentication(false);
    
      };
console.log(isUserAuthenticated);
    return (
        
        <div>
            
            <AuthContext.Provider value={{Login, Logout, token, userData, isUserAuthenticated }}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );

}

const useAuth = () => useContext(AuthContext);
export {useAuth, AuthContextProvider}