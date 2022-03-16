import React from "react";
import Yamak from "./Yamak";
import Button from "./Button";
import FootNote from "./FootNote";
import { Link } from "react-router-dom";
import "./index.css"
const Password = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Yamak/>
                </div>
                <div className="col colMargin colMargin2" >
                    <h4 className=" heading-1 mb-4">Enter Password</h4>
                    <h6 style={{marginLeft:"170px"}}><Link to="/" >Forgot Password?</Link></h6>
                    <input className="mb-2 mt-4 inputBox" />
                    <div className="mb-4">
                        <FootNote name="Don't ask for password on this device" />
                    </div>
                    <Button btnName="Sign In"/>
                    <button type="button" className="inputBox" style={{color:"white" , marginTop:"40px"}}><Link to="/otp" className="link">Get OTP on Your Mobile</Link></button>
                    <div><small className=" m-0 mt-4 ">Having Trouble Logging in ?<Link to="/" className="link" >Get Help</Link></small></div>
                </div>
                
            </div>
        </div>
    )
}

export default Password;