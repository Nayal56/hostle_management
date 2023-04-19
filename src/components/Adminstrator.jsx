import React, { useState } from "react";
import axios from "axios";

export const Adminstrator = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const administrator = (e) => {
        e.preventDefault();

        if (email.length === 0) {
            alert("E-mail has been left blank!");
        } else if (pass.length === 0) {
            alert("Password has been left blank!");
        } else {
            axios.post("http://localhost:3001/admin", {
                email: email,
                pass: pass,
            }).then((response) => {
                if (response.data.message === "success") {
                    setLoginStatus(response.data.name + ' is logged in');
                } else {
                    setLoginStatus('Login failed. Please try again.');
                }
            }).catch((error) => {
                console.log(error);
            });
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Supervisor / Admin Login</h2>
            <form className="login-form" onSubmit={administrator}>
                <label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" " id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <div>{loginStatus}</div>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? <b>Sign Up</b></button>
        </div>
    )
}
