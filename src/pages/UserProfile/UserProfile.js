import Header from "../../components/Header/Header";
import "./UserProfile.css";
import StatusCreator from "../../components/StatusCreator/StatusCreator";
import userImage from "../../media/userImage.png";
import { UserInfo } from "../../context/context";
import { useContext } from "react";

function UserProfile() {
  const { information } = useContext(UserInfo);
  const useName = information.username;
  console.log(information);
  console.log(useName);

  return (
    <div className="UserProfile">
      <Header />
      <h1 className="banner">
        <a className="banner-upload" href="" alt="">
          Upload a banner
        </a>
      </h1>
      <img src={userImage} className="banner-image"></img>
      <h2 className="banner-name">{useName}</h2>
      <h3>Post a Status</h3>

      <br></br>
      <StatusCreator />
    </div>
  );
}

export default UserProfile;
