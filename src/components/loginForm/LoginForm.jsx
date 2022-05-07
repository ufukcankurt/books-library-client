import "./loginForm.css";
import { Link } from "react-router-dom";
import {useState} from "react"

const LoginForm = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log("user:", username);
  console.log("pass:", password);

  return (
    <div className="loginFormContainer">
      <form onSubmit={handleSubmit}>
        <div className="registerFormTitle">
          <h3>Giriş yap</h3>
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

    <button className="secondary-button" type="submit">Giriş Yap</button>

    <div className="haveAccount">
          <p>Hesabın yok mu?</p>
          <Link to="/register">
            <a>Kayıt Ol</a>
          </Link>
        </div>
        
      </form>
    </div>
  );
};

export default LoginForm;
