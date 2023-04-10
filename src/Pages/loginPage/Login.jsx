import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/userAction";
import Loader from "../../component/Loader/Loader";
import "./Login.css";

function Login() {
  const email = useRef();
  const errRef = useRef();
  const password = useRef();
  const [emailerr, setEmailErr] = useState(false);
  const [passworderr, setPasswordErr] = useState(false);

  const [emaill, setEmail] = useState();
  const dispatch = useDispatch();

  const User = useSelector((state) => state.user);

  const { isUserLoading, user, userIsLogged } = User;

  const hundleLogin = () => {
    console.log(email.current.value, password.current.value);

    dispatch(loginUser(email.current.value, password.current.value));
  };

  useEffect(() => {
    if (userIsLogged) {
      //history.pushState('/')
    }
  }, [history, userIsLogged]);

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
    // Use a regular expression to check if the email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[a-zA-Z]).{8,16}$/;
    return regex.test(password);
  };

  return (
    <div>
      {isUserLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {" "}
          <div className="login-container">
            <h3>User Login</h3>
            <div className="login-wrrapper-box">
              <div className="login-tile">
                <h5>Login to your account</h5>
              </div>
              <div className="body-login">
                <div
                  className={classNames("body-input-login first-login", {
                    "login-error-show": emailerr,
                  })}
                >
                  <label>Email</label>
                  <input
                    onChange={(e) => {
                      checkEmail(e.target.value);
                    }}
                    ref={email}
                    type={"text"}
                    placeholder={"Enter your Email"}
                  ></input>
                  <label
                    className={classNames("login-error", {
                      "login-error-show": emailerr,
                    })}
                    style={{ marginTop: "80px", display: "none" }}
                  >
                    Invalid Email
                  </label>
                </div>
                <br></br>
                <div
                  className={classNames("body-input-login  second-login  ", {
                    "login-error-show": passworderr,
                  })}
                >
                  <div className="password-login">
                    <label>Password</label>
                    <label
                      className={"login-password"}
                      placeholder={"Enter your Password"}
                    >
                      Forgot Password ?{" "}
                    </label>
                  </div>

                  <input
                    ref={password}
                    type={"password"}
                    onChange={(e) => {
                      checkPassword(e.target.value);
                    }}
                  ></input>
                  <label
                    className={classNames("login-error", {
                      "login-error-show": passworderr,
                    })}
                    style={{ marginTop: "80px" }}
                  >
                   The password must be between 8-16 characters long and contain at least one uppercase letter, one lowercase letter, and one special character to be considered valid
                  </label>
                </div>
                <div className="checkbox-input">
                  <input type={"checkbox"}></input>
                  <label>Stay signed in</label>
                </div>
                <button onClick={hundleLogin}>
                  {" "}
                  <Link className="login-link" to="/">
                    Login
                  </Link>{" "}
                </button>
              </div>
              <div className="create-account">
                <h5>Create an account</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
