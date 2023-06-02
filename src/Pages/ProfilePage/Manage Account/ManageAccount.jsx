import React, { useState } from "react";
import EditForm from "../EditForm/EditForm";
import "./ManageAccount.css";

function ManageAccount() {

const [open , setOpen ] =useState(false) ; 


  return (
<>
    <div className="account-settings">
      <div className="account-settings-title">
        <h1>Account Settings</h1>
        <p>Control, protect, and secure your account.</p>

        <div className="account-info-section">
          <div className="account-info">
            <div className="account-info-title">
              
              <p>Account Information</p>
            </div>
            <div className="acount-info-body">
              <h5> mohamed reda falhi </h5>
              <p>reda.falhi10@gmail.com</p>
              <p>display as anonymous</p>
            </div>
            <button   onClick={()=>{setOpen(true)}}  >Edit</button>
          </div>
        </div>

        <div className="account-password-section">
          <div className="account-password">
            <div className="account-password-title">
              
              <p>Password</p>
            </div>
            <div className="acount-password-body">
              <h5> ************* </h5>
            </div>
            <button>Edit</button>
          </div>
        </div>

        <div className="account-password-section">
          <div className="account-password">
            <div className="account-password-title">
              
              <p>Mobile Number</p>
            </div>
            <div className="acount-password-body">
              <h5>
                
                To enhance your account security, add your mobile number.
              </h5>
            </div>

            <button>Edit</button>
          </div>
        </div>
      </div>




    </div>
<EditForm  open={open}  setOpen={setOpen} ></EditForm>
</>
  );
}

export default ManageAccount;
