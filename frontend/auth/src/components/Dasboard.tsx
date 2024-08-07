import { useAuth } from "../context/AuthContext"

const Dashboard = () =>
{
    const {Logout} = useAuth();
    
    return (
        <div>
            <h1>Dasboard Component</h1>
            <button onClick={Logout}>Logout</button>
        </div>
    );
};

export default Dashboard