import React from "react";

const clickHandler = () =>{
    console.log("Button Clicked!")
}

const Button = (props) => {

    return(
        <button onClick = {props.clickHandler} className = {props.type}>{props.children}</button>
    );

}

export default Button;

