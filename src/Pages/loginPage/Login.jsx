import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import nikeBlack from "../../assets/nikeLogoBack.png";
import nikeWhite from "../../assets/nikeLogo.png";
import axios from "axios";
import jwtDecode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { authActionLogin } from "../../store/auth/auth.action";
import { selectCurrentUser } from "../../store/auth/auth.selector";

function Login() {
  const errRef = useRef();
  const [emailerr, setEmailErr] = useState(false);
  const [passworderr, setPasswordErr] = useState(false);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const User = useSelector((state) => state.user);


  const checkEmail = (e) => {
    e = e.trim();
    if (!isValidEmail(e) && e != "") {
      setEmailErr(true);
      console.log(emailerr);
    } else {
      setEmailErr(false);
    }
  };

  const checkPassword = (e) => {
    if (!isValidPassword(e) && e != "") {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,16}$/;
    return regex.test(password);
  };

const defaultFormFields = {
email  : "" , 
password : ""
}

const [formFields , setFormFields] = useState(defaultFormFields)
const userInfo = useSelector(selectCurrentUser)
const {email , password } = formFields

const handleChange = (e)=>{
setFormFields({...formFields , [e.target.name] :e.target.value  })
}

const handleLogin = () => {
dispatch(authActionLogin({ email , password}))
};

useEffect (()=>{
if(userInfo){
navigate("/admin")
}


}, [userInfo])



  return (
    <div>
      { (
        <>
          <div className="login-container">
            <div className="login-wrapper">
              <div className="login-first-section">
                <div className="login-first-section-image">
                  <img />
                </div>
              </div>

              <div className="login-second-section">
                <div className="login-second-section-wrrapper">
                  <div className="login-body">
                    <div className="login-title">
                      <div className="login-title-image">
                        <img src={nikeBlack} />
                      </div>
                      <div className="login-title-name">
                        <h2>Your Account for Everything Nike</h2>
                      </div>
                    </div>
                    <div className="login-input-wrapper">
                      <div className="login-body-input">
                        <div class="col-3 input-effect">
                          <input class="effect-19" type="text" name="email"  placeholder=""  onChange={handleChange} />
                          <label>email</label>
                        </div>
                        <div class="col-3 input-effect">
                          <input
                            name="password"
                            class="effect-19"
                            type="password"
                            placeholder=""
                            onChange={handleChange}
                          />
                          <label>Password</label>
                        </div>
                      </div>
                      <div className="login-fotter-input">
                        <div className="remember-me">
                          <div class="form-group">
                            <input type="checkbox" id="html" />
                            <label className="label" for="html">
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <div className="forgot-password">
                          <p>Forgot Password ?</p>
                        </div>
                      </div>
                    </div>

                    <div className="login-submit-buttons">
                      <div className="btn1">
                        <button onClick={handleLogin}>
                          {" "}
                          <p> LOG IN </p>
                          <img
                            width={40}
                            style={{ float: "left" }}
                            src={nikeWhite}
                          />
                        </button>
                      </div>

                      <div className="btn2"></div>
                    </div>
                  </div>
                </div>

                <div className="login-footer"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
