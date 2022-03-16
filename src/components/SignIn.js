import React from "react";
import Yamak from "./Yamak";
import SignForm from "./SignForm";
import "./index.css";

const SignIn = () => {
   return(
       <div className="container">
           <div className="row">
                <div className="col">
                    <Yamak/>
                </div>
                <div className="col colMargin">
                    <SignForm/>
                </div>
           </div>

       
   
       </div>
   ) 
}

export default SignIn