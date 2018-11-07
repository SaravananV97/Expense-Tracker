import React from "react";
import "./backdrop.css";
const Backdrop = (props) => {
    console.log("Backdropping...");
    console.log(props.show);
    if(props.show)
        return <div className = "Backdrop"></div>
    else
        return null;
}

export default Backdrop;
