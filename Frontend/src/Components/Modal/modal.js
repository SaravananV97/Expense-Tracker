import React from "react";
import "./modal.css";
import Backdrop from "../Backdrop/backdrop";
const Modal = (props) => {
    if(props.show){
        return (
        <div>
        <Backdrop show = {props.show} />
        <div className = "Modal">{props.children}</div>
        </div>
        )
    }
    else
        return null;
}
export default Modal;