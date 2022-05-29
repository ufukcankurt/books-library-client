import "./register.css"
import RegisterImage from "../../components/registerImage/RegisterImage"
import RegisterForm from "../../components/registerForm/RegisterForm"
import { useEffect, useState } from "react"

const Register = () => {

    const [image, setImage]= useState("/assets/login_6.jpg")

    useEffect(()=> {
        document.title = "UCK Books - Register"
    },[])

   
    return (
        <div className="registerContainer">
            <RegisterImage/>
            <RegisterForm/>
        </div>
    )
}

export default Register