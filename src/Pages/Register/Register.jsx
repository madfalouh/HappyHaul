import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../actions/userAction";
import Loader from "../../component/Loader/Loader";
import '../../Pages/loginPage/Login.css'
function Register() {
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const dispatch = useDispatch();

  const User = useSelector((state) => state.user);

  const { isUserLoading, user, userIsLogged } = User;

  const hundleLogin = () => {
    console.log(email.current.value, password.current.value);

    dispatch(registerUser(   name.current.value  , email.current.value, password.current.value));
  };

  useEffect(() => {
    if (userIsLogged) {
      //history.pushState('/')
    }
  }, [history, userIsLogged]);

  return (
    <div>
      {isUserLoading ? (
        <Loader></Loader>
      ) : (
        <>
          {" "}
          
          <div className="login-container">
            <h3>User Regiter</h3>
            <div className="login-wrrapper-box">
              <div className="login-tile">
                <h5>Creat  a new account</h5>
              </div>
              <div className="body-login">
                <div className="body-input-login first-login">
                  <label>Name</label>
                  <input ref={name} type={"text"}></input>
                </div>
                <br></br>
                <div className="body-input-login first-login">
                  <label>Email</label>
                  <input ref={email} type={"text"}></input>
                </div>
                <br></br>
                <div className="body-input-login  second-login  ">
                  <div  className="password-login" >

                          <label>Password</label>
                      <label className="login-password" >Forgot Password ? </label>
            </div>
                 

                  <input ref={password} type={"password"}></input>
                </div>
                <div className="checkbox-input">
                  <input type={"checkbox"}></input>
                  <label>Stay signed in</label>
                </div>
                <button onClick={hundleLogin}>
                  {" "}
                  <Link  className="login-link"  to="/">Register</Link>{" "}
                </button>
              </div>
              <div className="create-account">
     <h5>Login to your account</h5>
</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Register;
