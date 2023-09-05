import { Link } from "wouter";
import { useState } from "react";
import axios from "axios";
import CreateAccount from "./CreateAccount";
axios.defaults.baseURL = "http://localhost:5000";
export const Log = (props) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const { setInformation } = props;

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const handleLogin = async () => {
    try {
      const rresponse = await axios.post("/Auth/login", {
        username: username,
        password: password,
        // email: emailLogin,
      });

      if (rresponse.data.success) {
        console.log("you win");
        setLoggedIn(true);
        setToken(rresponse.data.token);
        setInformation(rresponse.data.user);
        // setUserData(rresponse.data.user);
      } else {
        console.log("Login failed:", rresponse.data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <header className="App-header">URspace</header>
      <h1 className="greeting">Greetings</h1>
      <h1 className="login">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to={loggedIn ? "/UserProfile" : "/"}>
          {" "}
          <button onMouseOver={handleLogin}>Login</button>
        </Link>
      </h1>
      <CreateAccount />
    </>
  );
};
