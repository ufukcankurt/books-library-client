import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const LoginCall = async (userCredentials, dispatch) => {
    const navigate = useNavigate();
  // first one when I click the button I'm gonna dispatch my start Action
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "http://localhost:8000/api/auth/login",
      userCredentials
    );
    dispatch(loginSuccess(res.data));
    navigate("/")
  } catch (error) {
    dispatch(loginFailure());
  }
};
