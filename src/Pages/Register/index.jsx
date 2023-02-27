import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import registerApi from "../../Api/registerApi";
import { addToken } from "../../App/Slices/userSlice";
import { registerSchema } from "../../schema/formSchema";
import "../../Styles/Pages/Register/Style.css";

export default function Register() {
  // const { access_token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const setUserLogin = (value) => {
    const action = addToken(value);
    dispatch(action);
  };

  const getTokenApi = async (user) => {
    const data = {
      "grant_type": "client_credentials",
      "client_id": user?.Key,
      "client_secret": user?.Password,
    };
    const userToken = await registerApi.post(JSON.stringify(data));
    if(userToken?.access_token){
      navigate("/")
    }
    setUserLogin(userToken);
  };

  const onSubmit = (data) => {
    getTokenApi(data);
  };
  return (
    <div className="register_wraper">
      <h2 className="title">Petfinder Test</h2>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <div className="input-control">
              <input defaultValue="v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ" name="Key" {...register("Key")} type="text" placeholder="Key" />
              {errors.Key ? <span className="error-mess">{errors.Key.message}</span> : <span> </span>}
            </div>
            <div className="input-control">
              <input defaultValue="91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H" name="Password" {...register("Password")} type="password" placeholder="Password" />
              {errors.Password ? <span className="error-mess">{errors.Password.message}</span> : <span> </span>}
            </div>

            <p>Forgot your password?</p>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
