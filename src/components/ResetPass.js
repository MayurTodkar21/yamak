import React from "react";
import Button from "./Button";
import FootNote from "./FootNote";
import Yamak from "./Yamak";
import { Link } from "react-router-dom";
import "./index.css"

const ResetPass=()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Yamak/>
                </div>
                <div className="col colMargin colMargin2" >
                    <h4 className="heading-1 mb-4">Reset Password</h4>
                    <FootNote name="Sent to +91XXXXXXXXXX"/>
                    <FootNote name="Sent to @gmail.com"/>
                    <Link to="/otp" className="link">
                    <Button btnName="Generate OTP"/>
                    </Link> 
                    <div className="mt-4"><small id="emailHelp" className="form-text text-muted mb-4 mt-4" style={{fontSize:"12px"}}>Having trouble loggin In? <Link to="/otp" className="link"> Get Help</Link></small></div>
                </div>
            </div>
        </div>
    )
}

export default ResetPass;