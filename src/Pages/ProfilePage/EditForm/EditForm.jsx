import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./EditForm.css";

function EditForm({open  , setOpen}) {
  const dispatch = useDispatch();

  const User = useSelector((state) => state.user);
  const { isUserLoading, user, userIsLogged } = User;

  useEffect(() => {
    if (userIsLogged) {
      dispatch(getuserDetails());
    }
  }, [userIsLogged]);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name)
      console.log(user);
    }
  }, [user]);

const hundleChange = () => {

dispatch(updateUserDetails({ id : user.id , email : email , name : name   , password : password}))

}


  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

console.log(open);

  return (
    <div>
      <div className= { classNames(  "edit-form" , {"show-edit-form" : open}  )    }>
        <div className=  { classNames(  "black-bg" , {"show-edit-form" : open}  )    }></div>
        <div className="login-container">
          <div className="login-wrrapper-box">
            <div className="login-tile">
              <h5>Edit your account</h5>
            </div>
            <div className="body-login">
              <div
                className={classNames("body-input-login first-login", {
                  "login-error-show": false,
                })}
              >
                <label>Email</label>
                <input type={"text"} placeholder={"Enter your Email"} value={email} onChange={(e) => setEmail(e.target.value)}  ></input>
                <label
                  className={classNames("login-error", {
                    "login-error-show": false,
                  })}
                  style={{ marginTop: "80px", display: "none" }}
                >
                  Invalid Email
                </label>
              </div>
              <br></br>

              <div
                className={classNames("body-input-login first-login", {
                  "login-error-show": false,
                })}
              >
                <label>Name</label>
                <input type={"text"} placeholder={"Enter your Name"} value={name} onChange={(e) => setName(e.target.value)}></input>
                <label
                  className={classNames("login-error", {
                    "login-error-show": false,
                  })}
                  style={{ marginTop: "80px", display: "none" }}
                >
                  Invalid Email
                </label>
              </div>
              <br></br>

              <div
                className={classNames("body-input-login first-login", {
                  "login-error-show": false,
                })}
              >
                <label>Mobile Number</label>
                <input
                  type={"text"}
                  placeholder={"Enter your Mobile Number"}
                ></input>
                <label
                  className={classNames("login-error", {
                    "login-error-show": false,
                  })}
                  style={{ marginTop: "80px", display: "none" }}
                >
                  Invalid Email
                </label>
              </div>

              <br></br>

              <div
                className={classNames("body-input-login first-login", {
                  "login-error-show": false,
                })}
              >
                <label>Password</label>
                <input
                  onChange={ (e) => { setPassword(e.target.value) }}
                  type={"password"}
                  placeholder={"Enter your Password"}
                ></input>
                <label
                  className={classNames("login-error", {
                    "login-error-show": false,
                  })}
                  style={{ marginTop: "80px", display: "none" }}
                >
                  Invalid Email
                </label>
              </div>


              <button className="edit-form-link"  onClick={ ()=>{  hundleChange() ;  } } >
                {" "}
                <Link className="login-link  " >
                  Done
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
