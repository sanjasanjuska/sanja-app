import React, { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [name, setName] = useState("");


  const handleChange = (event) => {
    setName(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "") {
      props.enterChat(name);
    }
    setName("");
  };

  return (
    <div className="login-style">
      <div className="login-style-logo"></div>
      <h1 className="login-style-heading">
        Dobrodošli u Sanjinu chat aplikaciju!
      </h1>
      <form action="" onSubmit={handleSubmit} className="card">
        <label className="label--name" htmlFor="name">
          Unesite svoje korisničko ime:
        </label>
        <input
          className="login-input"
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
        />
        <button className="login-button" type="submit">
          ULAZAK
        </button>
      </form>
    </div>
  );
};

export default Login;