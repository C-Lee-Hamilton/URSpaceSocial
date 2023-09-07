import "./styles/App.css";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import { Link, Route, Switch } from "wouter";
import UserProfile from "./pages/UserProfile/UserProfile";
import { useState } from "react";
import { UserInfo } from "./context/context";
import { useContext } from "react";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

function App() {
  const [information, setInformation] = useState("no user info");

  return (
    <div className="App">
      <Switch>
        <UserInfo.Provider value={{ information, setInformation }}>
          <Route path="/UserProfile" exact component={UserProfile} />

          <Route
            path="/"
            // component={() => <Log setInformation={setInformation} />}
            component={Log}
          />
        </UserInfo.Provider>
      </Switch>
    </div>
  );
}

const Log = () => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const { information, setInformation } = useContext(UserInfo);
  const [create, setCreate] = useState(true);
  const viewCreate = () => {
    setCreate(!create);
  };

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
        setUserData(rresponse.data.user);
        setInformation(rresponse.data.user);
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

      <h1 className="login">
        <h1 className="greeting">Login</h1>
        <input
          className="inputLogin"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="inputLogin"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to={loggedIn ? "/UserProfile" : "/"}>
          {" "}
          <button className="inputLoginSubmit" onMouseOver={handleLogin}>
            Submit
          </button>
        </Link>
      </h1>
      <a onClick={viewCreate} className="accountQuestion">
        Don't have an account?
      </a>
      <div className={!create ? "createAccount" : "createAccountInvisible"}>
        <CreateAccount />
      </div>
    </>
  );
};

export default App;
