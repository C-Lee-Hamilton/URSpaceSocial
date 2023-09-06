import axios from "axios";
import { useState } from "react";
import "./CreateAccount.css";
function CreateAccount() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("/Users/register", {
        email: email,
        password: newPassword,
        username: newUsername,
      });
      console.log(response.data.user);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="createAccountBar">
      Create Account
      <div className="createAccountContent">
        <input
          className="createAccountInputs"
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          className="createAccountInputs"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="createAccountInputs"
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="createAccountButton" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
