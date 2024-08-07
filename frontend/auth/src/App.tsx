import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './components/Registration';
import { AuthContextProvider, useAuth } from './context/AuthContext';
import Dashboard from './components/Dasboard';
import LoginForm from './components/Login';
import ProtectedRoute from './components/Protectedroutes';

function App() {

 
  return (
    <div>
      <AuthContextProvider >
        <BrowserRouter>
        <Routes>

          <Route path='/signup' element={ <Registration /> }></Route>
          <Route path='/Login' element={ <LoginForm /> }></Route>
           <Route path='/dashboard' element={<ProtectedRoute> <Dashboard/> </ProtectedRoute> }></Route>

        </Routes>    
        </BrowserRouter>

         
      </AuthContextProvider>
    
    </div>
  );
}

export default App;

