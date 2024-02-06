import { useState } from "react";
import "./EditProfile.css";
import { updateUser } from "../../services/userService";
import { useParams,useNavigate } from "react-router-dom";
const EditProdile = () => {
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const { userId } = useParams();
  const navigate = useNavigate();
  const editUserProfile = async () => {
    await updateUser(userId, {
      fullName: newName,
      email: newEmail,
    });
    alert("User Updated Successfully");
    navigate("/dashboard");
  };
  return (
    <div className="edit-profile">
      <div className="edit-profile-form">
        <p>
          <label htmlFor="Full Name">Enter new user Name</label>
          <input
            type="text"
            placeholder="Gourav Parmar"
            required
            value={newName}
            onChange={(e: any) => setNewName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="Email">Enter your new mail address</label>
          <input
            type="text"
            placeholder="gourav.parmar434@gmail.com"
            required
            value={newEmail}
            onChange={(e: any) => setNewEmail(e.target.value)}
          />
        </p>
        <p>
          <button
            className="update-btn"
            onClick={() => {
              editUserProfile();
            }}
          >
            Update
          </button>
        </p>
      </div>
    </div>
  );
};

export default EditProdile;
