import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import UserProfile from "./components/UserPorfile/UserProfile";
import Dashboard from "./components/Dashboard/Dashboard";
import EditProfile from "./components/EditUserProfile/EditProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp type="signup" />} />
        <Route path="/login" element={<SignUp type="login" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path="/editProfile/:userId" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
