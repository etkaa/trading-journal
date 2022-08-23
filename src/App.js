// import Home from "./Components/Home/Home";
import SignInForm from "./Components/SignIn/SignInForm";
import SignUpForm from "./Components/SignUp/SignUpForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {/* <Route exact path="/">
        {loggedIn ? <Redirect to="/dashboard" /> : <Home />}
      </Route> */}
      <Route path="/" element={<Navigate to="/signin" replace />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
