import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [ loginValues, setLoginValues ] = useState({username: "",password: "", });
    const [  isLoading, setIsLoading ] = useState(false)

    const onChange = (e) => {
        setLoginValues({...loginValues, [e.target.name]: e.target.value });
    }
    const login = (e) => {
        e.preventDefault()
        console.log("click")
        axios.post('http://localhost:5000/api/login', loginValues)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        setIsLoading(true)
      })
      .catch(err=>{
        console.log(err.response);
      });
    }
    return(
        <form onSubmit={login}>
            <input 
                type="text"
                name="username"
                placeholder="username"
                value={loginValues.username}
                onChange={onChange}
                />
            <input 
                type="text"
                name="password"
                placeholder="password"
                value={loginValues.password}
                onChange={onChange}
                />
            <button>Submit</button>
            {isLoading && <div>Loading...</div>}
        </form>
    )
}

export default Login;