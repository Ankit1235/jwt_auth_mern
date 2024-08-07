import { useState } from 'react';
import RegistrationFormHook from '../hook/RegistrationHook';
import '../styles/Registration.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const { registerUser } = RegistrationFormHook();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
    await registerUser(data);
  };

  const handleClick = () =>
  {
    
    navigate("/Login");
  }

  return (
    <div className='FormContainer'>
      <form onSubmit={handleSubmit} className='RegistrationForm'>
        <input type="text" name="name" placeholder="Username" value={data.name} onChange={handleChange} />

        <input type="email" name="email" placeholder="E-mail" value={data.email} onChange={handleChange} />

        <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

        <input type="password" name="confirmPassword" placeholder="Confirm-password" value={data.confirmPassword} onChange={handleChange} />

        <button type="submit">Submit</button>
        <button onClick={ handleClick }>Already have an account ? Login</button>
      </form>
    </div>
  );
}

export default Registration;