import React from "react";
import square from "./square.png";
import "./index.css";

const FootNote = (props) =>{
    return(
        <div  className="mb-3" style={{fontSize:"15px"}}><img className="squareStyle" src={square} alt="G"/>  {props.name}</div>
    )
}
export default FootNote;