import React from "react";
import Continue from "./Continue";
import Yamak from "./Yamak";
import google from "./google.jpg"
import facebook from "./fb.png"
import or from "./or.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import FootNote from "./FootNote";
import "./index.css"


const CreateAccount = () =>{
    return (
        <div className="container">
        <div className="row">
             <div className="col">
                 <Yamak/>
             </div>
             <div className="col colMargin colMargin2">
                 <h4 className="heading-1">Create An Account</h4>
                 <div className="removeDisplay">
                 <Continue name="Google" img={google}/>
                 <Continue name="Facebook" img={facebook}/>
                 <img className="imgStyle" src={or} alt ="nope"/>
                 </div>
                 <form className="mb-4">
                     <div style={{display: "inline"}} className="mb-2">
                         <input className="inputBox" style={{width:"145px", marginRight:"10px"}} placeholder="First Name"/>
                        <input className="inputBox" style={{width:"145px"}} placeholder="last Name"/>
                         
                     </div>
                     <div className="mb-2 mt-2" >
                     <input className="inputBox "style={{width:"300px"}} placeholder="Email/Mobile Number"/>
                     </div>
                     <div >
                     <input className="inputBox" style={{width:"300px"}} placeholder="Password"/>
                     </div>
                     <small id="emailHelp" className="form-text text-muted mb-2 p-0" style={{fontSize:"13px",lineHeight:"50%"}}>It contains at least 6-15 characters and one uppercase,
                     <br className="m-0 p-0"/>
                     lowercase, special characters and number.</small>
                     <div className="mb-2">
                     <input className="inputBox mt-2"  style={{width:"300px"}} placeholder="Re-enter Password"/>
                     </div>
                    <FootNote name="Terms & Policy"/>

                 </form>
                 <Button btnName="Create An Account"/>
                 <div><small className="center">Already have an account? <Link to="/" >Sign-In</Link></small></div>
                 
             </div>
             
        </div>

    

    </div>
    )
}

export default CreateAccount;