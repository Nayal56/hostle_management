import React, { useState } from "react";
import axios from "axios";
export const Register = (props) => {
    const [rollno, setRollNo] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [dept, setDept] = useState('');
    const [year, setYear] = useState('');
    const [mobile, setMobile] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const [registerStatus,setRegisterStatus] = useState('');


    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", {
          rollno: rollno,
          name: name,
          mobile: mobile,
          gender: gender,
          email: email,
          dept: dept,
          year: year,
          pass: pass,
        })
          .then((response) => {
            alert('Registration successful!');
          })
          .catch((error) => {
            console.log(error);
            alert('Registration failed. Please try again later.');
          });
      };


    return (
        <div className="auth-form-container">
            <h2> Student Registration</h2>
            <form className="register-form" onSubmit={register}>
            <label htmlFor="rollno">Roll Number</label>
            <input value={rollno} name="rollno" onChange={(e) => setRollNo(e.target.value)} id="rollno" placeholder="" />
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="gender">
                Gender:
                <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/> Male
                <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/> Female
                <input type="radio" name="gender" value="Other" onChange={(e) => setGender(e.target.value)} /> Other
                </label>
            <label htmlFor="mobile">Mobile No.</label>
            <input value={mobile} name="mobile" onChange={(e) => setMobile(e.target.value)} id="mobile" placeholder="9876543210" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@nitkkr.ac.in" id="email" name="email" />
            <label htmlFor="dept">Department</label>
            <select name="dept" id="dept" onChange={(e) => setDept(e.target.value)}>
                <option value="Btech">Btech</option>
                <option value="Mtech">Mtech</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
                <option value="phd">Phd</option>
            </select>
            <label>Year :</label>
            <select name="year" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year </option>
            {Array.from({length: 24}, (_, index) => (
              <option key={index} value={2000 + index}>{2000 + index}</option>
            ))}
          </select>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input value={confirmpass} onChange={(e) => setConfirmPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <br></br>
            <button type="submit"onClick={register}>Register</button>
            <h1 style ={{fontSize: '15px', textAlign:'center',marginTop:'20px'}}>{registerStatus}</h1>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
    }
export default Register;