import { useContext, useState } from "react";
import ApiContext from "../context/ApiContext";

const Signin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const api = useContext(ApiContext)

    const handleLogin = () => {
        fetch(api + '/api/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Save the access token in localStorage
            localStorage.setItem('access', data.access);
            // Save the refresh token if needed
            localStorage.setItem('refresh', data.refresh);
            // Redirect to a success page, e.g., /contents
            navigate('/classes/');
        })
        .catch(error => {
            console.error(error.message); // Log the error message
            // Handle errors, e.g., setError(error.message);
        });
    };


    return ( 
        <div>
            <form action="submit">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button onClick={handleLogin}>submit</button>
            </form>
        </div>
     );
}
 
export default Signin;