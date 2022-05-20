import "./login.css";
import LoginImage from "../../components/loginImage/LoginImage";
import LoginForm from "../../components/loginForm/LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginContainer">
      <LoginImage />
      <LoginForm />
    </div>
  );
};

export default Login;
