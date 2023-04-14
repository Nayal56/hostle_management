import React, { useState } from "react";

export const Login = (props) => {
    const [rollno, setRollno] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(rollno);
    }

    return (
        <div className="auth-form-container">
            <h2>Student Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="rollno">Roll Number</label>
                <input value={rollno} onChange={(e) => setRollno(e.target.value)}type="rollno" placeholder=" " isd="rollno" name="rollno" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Login as Hostle <b>Supervisor/ Admin</b></button>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? <b>Sign Up</b></button>
        </div>
    )
}