import Home from "./Components/Home/Home";
import SignInForm from "./Components/SignIn/SignInForm";
import SignUpForm from "./Components/SignUp/SignUpForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import NotRequireAuth from "./Components/RequireAuth/NotRequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route element={<NotRequireAuth />}>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;
