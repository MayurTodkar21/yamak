import React from "react";
import Yamak from "./Yamak";
import { Link } from "react-router-dom";
import FootNote from "./FootNote";
import Button from "./Button";
import "./index.css";


const Otp = () =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Yamak/> 
                </div>
                <div className="col colMargin colMargin2" >
                    <h4 className="heading-1">Verify OTP</h4>
                    <small id="emailHelp" className="form-text text-muted mb-2 "> <h6 className="mt-3 mb-3">Sent to +91XXXXXXXXXX <Link to="/">Edit</Link></h6> </small>
                    <div className="mb-3 mt-3">
                        <input value = {1} className="otpBox"/>
                        <input value = {5} className="otpBox"/>
                        <input value = {6} className="otpBox"/>
                        <input value = {0} className="otpBox"/>
                        <input value = {0} className="otpBox"/>
                        <input value = {8} className="otpBox"/>
                    </div>
                    <div className="mt-4">
                    <FootNote name="Don't ask for OTP on this device"/>
                    </div>
                    
                    <Button btnName="Generate OTP"/>
                    <div className="mt-4"><small id="emailHelp" className="form-text text-muted mb-4 p-0">Didn't get the code? <Link to="/otp" >Resend</Link></small></div>
                    <button type="button" className="btnStyle" style={{backgroundColor:"#bee1e6" ,}}><Link to="/otp" className="link" style={{color:"#8338ec"}}>Generate OTP</Link></button>
                    <div className="mt-3"><small id="emailHelp" className="form-text text-muted mb-4 mt-4" style={{fontSize:"12px"}}>Having Trouble Logging In? <Link to="/otp" className="link">Get Help</Link></small></div>
                </div>
            </div>
        </div>
    )
}

export default Otp;