import React from "react";
import "./index.css"

const Continue = (props) => {
    return(
        <div className="mb-3 continueStyle"><img style={{ width:"15px", height:"15px" , marginRight:"5px"}} src={props.img} alt="G"/> Continue with {props.name}</div>
    )
}

export default Continue;