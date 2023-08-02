import Header from "./components/Header";
import "./App.css";
import StatusCreator from "./components/StatusCreator";
import userImage from "./media/userImage.png";

function UserProfile() {
  return (
    <div className="UserProfile">
      <Header />
      <h1 className="banner">BANNER</h1>
      <img src={userImage} className="banner-image"></img>
      <h2 className="banner-name">Creator Name</h2>
      <h3>Post a Status</h3>
      <br></br>
      <StatusCreator />
    </div>
  );
}

export default UserProfile;
