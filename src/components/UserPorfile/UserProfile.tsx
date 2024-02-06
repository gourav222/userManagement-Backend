import "./UserProfile.css";
import man from "../../Images/man.png";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="user-container">
      <div className="user-profile">
        <div className="user-image">
          <img src={man} alt="" />
        </div>
        <div className="user-data">
          <h2>Name: {data.name}</h2>
          <h2>Email: {data.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
