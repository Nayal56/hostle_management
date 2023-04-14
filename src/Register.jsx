import React, { useState } from "react";

export const Register = (props) => {
    const [rollno, setRollNo] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2> Student Registration</h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="rollno">Roll Number</label>
            <input value={rollno} name="rollno" onChange={(e) => setRollNo(e.target.value)} id="rollno" placeholder="" />
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="mobile">Mobile No.</label>
            <input value={mobile} name="mobile" onChange={(e) => setMobile(e.target.value)} id="mobile" placeholder="9876543210" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="dept">Department</label>
            <select name="dept" id="dept">
                <option value="Btech">Btech</option>
                <option value="Mtech">Mtech</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option value="phd">Phd</option>
            </select>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input value={confirmpass} onChange={(e) => setConfirmPass(e.target.value)} type="confirmpassword" placeholder="********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}