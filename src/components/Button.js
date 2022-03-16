import React from "react";
import "../index.css";

const Button = (props) =>{
    return(
        <button type="button" className="btnStyle">{props.btnName}</button>
    )
}

export default Button;