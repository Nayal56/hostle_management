import React, { useState } from "react";
import './App.css';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Adminstrator } from "./components/Adminstrator";
import Navbar from "./components/Navbar";
import NoticeBoard from "./components/NoticeBoard";


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="grid-container">
        <div className="notice-board">
          <NoticeBoard/>
        </div>
        <div className="form-container">
          {
            currentForm === "login" ? <Login onFormSwitch={toggleForm} /> :
            currentForm === "register" ? <Register onFormSwitch={toggleForm} /> :
            currentForm === "administrator" ? <Adminstrator onFormSwitch={toggleForm} /> :
            null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
