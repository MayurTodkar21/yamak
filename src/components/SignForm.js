import React from "react";
import google from "./google.jpg"
import facebook from "./fb.png"
import Continue from "./Continue";
import or from "./or.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const SignForm = () =>{
    return(
        <>
        <div className="container">
            <div className="mb-4"><h4 className="heading-1" > <b>Sign in</b> or <b>Sign up</b></h4></div> 
             {/* <div style={{border: "1px solid #e8e8e4", padding:"5px", width:"300px", boxShadow:"4px 4px 10px  #e8e8e4"}} className="mb-3"><img style={{ width:"15px", height:"15px"}} src={google} alt="G"/> Continue with Google</div> */}
             <Continue name= "Google" img={google}/>
             <Continue name="Facebook" img={facebook}/>
             <img className="imgStyle" src={or} alt ="nope"/>
            <input className="mb-2 inputBox" placeholder="Mobile Number/Email"/>

            <div className="text-muted mb-2">Terms & Policy</div>
           <Link to="/otp" className="link"><Button btnName="Generate OTP" /></Link> 
        </div>
        <small className="center" style={{marginLeft:"20px"}}>Don't have an account? <Link to="/createaccount"  className="link">Click Here</Link></small>
        
        </>
    )
}

export default SignForm;