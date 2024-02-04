import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/AuthContext";

function FormsFirebase() {
  const auth = useAuth();
  const {displayName} = auth.user;
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    auth.register(emailRegister, passwordRegister);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email, password);
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    auth.loginWithGoogle();
  };
  const handleLogout = () => {
    auth.logout();
  }
  return (
    <div className="App">
      {displayName && <h5>welcome : {displayName}</h5>}

      
      <form className="form">
        <h3 className="title">Registro</h3>
        <input
          onChange={(e) => setEmailRegister(e.target.value)}
          className="input"
          type="email"
          placeholder="Correo Electronico"
        />
        <input
          onChange={(e) => setPasswordRegister(e.target.value)}
          className="input"
          type="password"
          placeholder="Contraseña"
        />
        <button onClick={(e) => handleRegister(e)} className="button">Registrarse</button>
      </form>
      <form className="form">
        <h3 className="title">Login</h3>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          type="email"
          placeholder="Correo Electronico"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          type="password"
          placeholder="Contraseña"
        />
        <button onClick={(e) => handleLogin(e)} className="button">Iniciar Session</button>
        {/* <button onClick={(e) => handleGoogle(e)} className="button">
          Google
        </button> */}
      </form>

      <button onClick={()=> handleLogout()} className="button">Logout</button>
    </div>
  );
}

export default FormsFirebase;
