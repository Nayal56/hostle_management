import React, { useState } from "react";
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Adminstrator } from "./components/Adminstrator";
import Navbar from "./components/Navbar";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div className="nav"><Navbar /></div>
      <div className="home-form">{
         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> :
         currentForm === "register" ? <Register onFormSwitch={toggleForm} /> :
         currentForm === "administrator" ? <Adminstrator onFormSwitch={toggleForm} /> :
         null
          }</div>
    </div>
  );
}

export default App;
