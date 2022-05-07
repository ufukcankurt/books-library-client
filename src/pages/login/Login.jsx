import "./login.css"
import LoginImage from "../../components/loginImage/LoginImage"
import LoginForm from "../../components/loginForm/LoginForm"

const Login = () => {
    return (
        <div className="loginContainer">
            <LoginImage/>
            <LoginForm/>
        </div>
    )
}

export default Login