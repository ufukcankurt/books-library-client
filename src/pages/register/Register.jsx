import "./register.css"
import RegisterImage from "../../components/registerImage/RegisterImage"
import RegisterForm from "../../components/registerForm/RegisterForm"
import { useState } from "react"

const Register = () => {

    const [image, setImage]= useState("/assets/login_6.jpg")

   
    return (
        <div className="registerContainer">
            <RegisterImage/>
            <RegisterForm/>
        </div>
    )
}

export default Register