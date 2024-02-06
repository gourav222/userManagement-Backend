import "./Dashboard.css";
import profile from "../../Images/profile.png";
import remove from "../../Images/remove.png";
import eye from "../../Images/eye.png";
import edit from "../../Images/edit.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllUserData, deleteUser } from "../../services/userService";

const UserCard = ({
  name,
  email,
  id,
  Sno,
  getData,
}: {
  name: string;
  email: string;
  id: any;
  Sno: any;
  getData: any;
}) => {
  const navigate = useNavigate();
  const handleDelete = async () => {
    await deleteUser(id);
    await getData();
    alert("User Deleted Successfully");
  };
  return (
    <div className="user-card">
      <div className="header">
        <span>{Sno + 1}</span>
        <img src={profile} alt="" />
      </div>
      <div className="user-mid">
        <span>{name}</span>
        <span>{email}</span>
      </div>
      <div className="features">
        <img
          src={eye}
          alt=""
          onClick={() => {
            navigate(`/profile/${id}`, { state: { name, email } });
          }}
        />
        <img src={edit} alt="" onClick={() => navigate(`/editProfile/${id}`)} />
        <img src={remove} alt="" onClick={() => handleDelete()} />
      </div>
    </div>
  );
};
const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  async function getData() {
    const data = await getAllUserData();
    setUserData(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="all-users">
        <div className="user">
          <h2>All Users</h2>
          {userData &&
            userData.map((user: any, index) => (
              <UserCard
                key={user.id}
                name={user.fullName}
                email={user.email}
                id={user._id}
                Sno={index}
                getData={getData}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
