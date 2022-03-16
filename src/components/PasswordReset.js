import React from "react";
import Yamak from "./Yamak";

import Button from "./Button";
import { Link } from "react-router-dom";
import "./index.css"

const PasswordReset = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Yamak/> 
                </div>
                <div className="col colMargin" >
                    
                    <h4 className="mb-4 heading-1">Reset Password</h4>
                    <small id="emailHelp" className="form-text text-muted " > Please Enter OTP to reset password</small><br/>
                    <small id="emailHelp" className="form-text text-muted " > Sent to +91XXXXXXXXXX <Link to="/" className="link">Edit</Link></small>
                    <div className="mb-2 mt-3">
                        <input value = {1} className="otpBox"/>
                        <input value = {5} className="otpBox"/>
                        <input value = {6} className="otpBox"/>
                        <input value = {0} className="otpBox"/>
                        <input value = {0} className="otpBox"/>
                        <input value = {8} className="otpBox"/>
                    </div>

                    <div><small id="emailHelp" className="form-text text-muted mb-4 p-0">Didn't get the code? <Link to="/otp">Resend</Link></small></div>
                    <div className="mb-3 mt-3">
                     <input  placeholder="New Password" className="inputBox" style={{ marginRight:"20px"}}/>
                    </div>
                    <div className="mb-4 mt-1">
                     <input  placeholder="Re-enter New Password" className="inputBox" style={{marginRight:"20px"}}/>
                    </div>

                    <Button btnName="Confirm Changes"/>
                    <div className="mt-4"><small id="emailHelp" className="form-text text-muted mb-4 mt-4" style={{fontSize:"12px"}}>Having Trouble Logging In?<Link to="/otp" className="link">Get Help?</Link></small></div>
                    <Link className="mt-4"style={{textDecoration:"none", marginLeft:"100px",}} to="/">Back to Sign-In</Link>
                </div>
            </div>
        </div>
    )
}
export default PasswordReset;