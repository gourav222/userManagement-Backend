import axios from "axios";
export const getAllUserData = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/v1/getusers");
    console.log("User For Registered", response.data.allUsers);
    return response.data.allUsers;
  } catch (err) {
    console.log("User For Registered", err);
  }
};

export const deleteUser = async (id: any) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/api/v1/deleteUser/${id}`
    );
    console.log("User For Registered", response.data);
    return response.data;
  } catch (err) {
    console.log("User For Registered", err);
  }
};

export const updateUser = async (id: any, data: any) => {
  try {
    const response = await axios.patch(
      `http://localhost:8000/api/v1/editUser/${id}`,
      data
    );
    console.log("User For Registered", response.data);
    return response.data;
  } catch (err) {
    console.log("User For Registered", err);
  }
}