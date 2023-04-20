import React, { useState } from "react";
import axios from "axios";

export const Login = (props) => {
    const [rollno, setRollno] = useState('');
    const [pass, setPass] = useState('');
    const [loginStatus,setLoginStatus]=useState('');


    const login = (e) => {
        e.preventDefault();
      
        if (rollno.length === 0) {
          alert("Roll No has been left blank!");
        } else if (pass.length === 0) {
          alert("Password has been left blank!");
        } else {
          axios.post("http://localhost:8090/login", {
            rollno: rollno,
            pass: pass,
          })
            .then((response) => {
              if (response.data.length > 0) {
                setLoginStatus(response.data[0].name + " is logged in");
                console.log("Login successful");
              } else {
                setLoginStatus("Login failed");
                console.log("Login failed");
              }
            })
            .catch((error) => {
              setLoginStatus("Login failed");
              console.error(error);
            });
        }
      };
        

    return (
        <div className="auth-form-container">
            <h2>Student Login</h2>
            <form className="login-form" onSubmit={login}>
                <label htmlFor="rollno">Roll Number</label>
                <input value={rollno} onChange={(e) => setRollno(e.target.value)} type="rollno" placeholder=" " id="rollno" name="rollno" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="pass" name="pass" />
                <br></br>
                <button type="submit" onClick={login}>Log In</button>
                <h1 style ={{fontSize: '15px', textAlign:'center',marginTop:'20px'}}>{loginStatus}</h1>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('administrator')}>Login as Hostle <b>Supervisor/ Admin</b></button>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? <b>Sign Up</b></button>
        </div>
    );
};
export default Login;