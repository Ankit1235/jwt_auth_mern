import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './components/Registration';
import { AuthContextProvider, useAuth } from './context/AuthContext';
import Dashboard from './components/Dasboard';
import LoginForm from './components/Login';

function App() {

  const { isUserAuthenticated } = useAuth();
  return (
    <div>
      <AuthContextProvider >

        <BrowserRouter>
        <Routes>

          <Route path='/' element={ !isUserAuthenticated ? <Registration /> :<Navigate to='/dashboard' />}></Route>
          <Route path='/dashboard' element={ isUserAuthenticated ? <Dashboard /> : <Navigate to='/' /> }></Route>
          <Route path='/Login' element={ !isUserAuthenticated ? <LoginForm /> : <Navigate to="/dashboard" /> }></Route>

        </Routes>
        
        </BrowserRouter>

         
      </AuthContextProvider>
    
    </div>
  );
}

export default App;

