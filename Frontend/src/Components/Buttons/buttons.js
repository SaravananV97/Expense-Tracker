import React from "react";
import Button from "./button";
import "./buttons.css";
const Buttons = (props) => {

    return (
        <div className = "BtnContainer">
            <Button clickHandler = {props.expenseClick} type = "AddButton">Add an Expense</Button>
            <Button clickHandler = {props.incomeClick} type = "AddButton">Add an Income</Button>
        </div>
    );

}

export default Buttons;

