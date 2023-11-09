import { Link , useNavigate} from 'react-router-dom';
import '../styles/Login.css';
import { useContext, useState } from 'react';
import  ApiContext  from '../context/ApiContext';
import axios from 'axios';




const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const api = useContext(ApiContext);


        const handleLogin = async () => {
            const obj = {
                username: username,
                password: password,
            };
        
            try {
                const response = await axios.post(api + '/api/login/', obj);
        
                console.log(response.data);
                // Save the access token in localStorage
                localStorage.setItem('access', response.data.access);
                // Save the refresh token if needed
                localStorage.setItem('refresh', response.data.refresh);
                // Redirect to a success page, e.g., /contents
                navigate('/classes/');
            } catch (error) {
                console.error(error);
                console.error(error.response.data.error);
                // Handle errors, e.g., setError(error.response.data.error);
            }
        };

    return ( 
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <div className="login__field">
                  <i className="login__icon fas fa-user" />
                  <input
                    type="text"
                    className="login__input"
                    placeholder="User name"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock" />
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <button className="button login__submit" onClick={handleLogin}>
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button>
                <Link to='/register/'>
                <button className="button login__submit">
                  <span className="button__text">Register</span>
                  <i className="button__icon fas fa-chevron-right" />
                </button>
                </Link>
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

     );
}
 
export default Login;