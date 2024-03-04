import Navbar from "../mainPage/navbar";
import Footer from "../shopPage/components/ShopFooter";
import Break from "../shopPage/components/Break";
import "./loginApp.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginApp() {
  const navigateTo = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6969/validate", {
        username,
        password,
      });

      if (res.data === "exists") {
        navigateTo("/admindash/", { state: username });
      } else {
        alert("User not found");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="LoginApp">
      <Navbar id="loginNav" />
      <Break />
      <Break />
      <center>
        <form className="loginForm" action="POST">
          <label htmlFor="username">Username:</label> &nbsp;
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="input-fields"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            autoComplete="off"
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label> &nbsp;
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-fields"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            autoComplete="off"
            required
          />
          <br />
          <br />
          <Link to="/admindash/" onClick={submit} className="submit-btn">
            Login
          </Link>
        </form>
      </center>
      <Footer id="loginFooter" />
    </div>
  );
}

export default LoginApp;
