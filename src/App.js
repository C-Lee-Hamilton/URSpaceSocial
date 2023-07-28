import "./App.css";
import UpdatesBox from "./components/UpdatesBox";
import { Link, Route, Switch } from "wouter";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/UserProfile" exact component={UserProfile} />
        <Route path="/" component={Log} />
      </Switch>
    </div>
  );
}

const Log = () => {
  return (
    <>
      <header className="App-header">URspace</header>
      <h1 className="greeting">Greetings</h1>
      <h1 className="login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <Link to="/UserProfile">
          {" "}
          <button>Login</button>
        </Link>
      </h1>
      <UpdatesBox />
    </>
  );
};

export default App;
