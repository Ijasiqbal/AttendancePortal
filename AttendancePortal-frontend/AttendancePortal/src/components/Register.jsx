import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiContext from '../context/ApiContext';

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const api = useContext(ApiContext)

    async function handleRegister() {
        try {
          const registrationData = {
            username,
            password,
          };
          const response = await axios.post(api+'/api/register/', registrationData);
      
          if (response.status === 200) {
            console.log('Registration successful');
            //navigate('/login/');
          } else {
            console.error('Registration failed');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };        
    
    return ( 
        <div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <h2>Register</h2>
                <div className="login__field">
                  <i className="login__icon fas fa-user" />
                  <input
                    id='username'
                    type="text"
                    className="login__input"
                    placeholder="User name "
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock" />
                  <input
                    id='password'
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                
                <button className="button login__submit" onClick={handleRegister}>
                  <span className="button__text">Register</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button>
              </form>
              
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4" />
              <span className="screen__background__shape screen__background__shape3" />
              <span className="screen__background__shape screen__background__shape2" />
              <span className="screen__background__shape screen__background__shape1" />
            </div>
          </div>
        </div>
        </div>
     );
}
 
export default Register;