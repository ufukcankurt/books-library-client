import "./loginForm.css";
import { Link, useNavigate } from "react-router-dom";
import {useContext, useState} from "react"
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import { LoginCall } from "../../context/authContext/apiCalls";
import { loginFailure, loginStart, loginSuccess } from "../../context/authContext/AuthActions";

const LoginForm = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  let navigate = useNavigate()

  const {isFetching, error, dispatch} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // LoginCall({username, password}, dispatch)
    
    dispatch(loginStart());
    try {
      const res = await axios.post(
      "auth/login",
      {username,password}
      );
      console.log("resdata:",res.data);
      dispatch(loginSuccess(res.data));
    navigate("/")
  } catch (error) {
    dispatch(loginFailure());
  }

    // try {
    //   await axios.post("http://localhost:8000/api/auth/login", {username,password})
    //   .then(response => response.status === 200 && navigate("/") )
    // } catch (error) {
    //   console.log(error);
    // }
   

  };

  console.log("user:", username);
  console.log("pass:", password);

  return (
    <div className="loginFormContainer">
      <form onSubmit={handleSubmit}>
        <div className="registerFormTitle">
          <h3>Giriş yap</h3>
          <h2>{error && error.message}</h2>
          <img src="/assets/sign-up.png" alt="" />
        </div>

        <label htmlFor="username">Kullanıcı İsmi</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Kullanıcı İsminizi Girin."
          required={true}
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
        <label htmlFor="password">Şifre</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Şifrenizi Girin."
          required={true}
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />

    <button onSubmit={handleSubmit} className="secondary-button" type="submit" disabled={isFetching}>Giriş Yap</button>

    <div className="haveAccount">
          <p>Hesabın yok mu?</p>
          <Link to="/register" style={{textDecoration:"none"}}>
            <p className="loginFormLinkP">Kayıt Ol</p>
          </Link>
        </div>
        
      </form>
    </div>
  );
};

export default LoginForm;
