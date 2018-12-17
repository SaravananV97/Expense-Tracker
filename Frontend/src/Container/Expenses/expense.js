import React, {Component} from "react";
import "./expense.css";

const Expense = (props) => {
        return (
                <figure className  ="item">
                    <blockquote className = "summary">Expense Summary #1</blockquote>
                    <figcaption className = "details">
                    <div className = "summary-box">
                        <span className = "detail"> Date: {props.expense.date}</span>
                        <span className = "detail">Amount: {props.expense.amount}</span>
                        <span className = "detail">category: {props.expense.category}</span>
                        <span className = "detail">Details: {props.expense.details} </span>
                    </div>
                    </figcaption>
                </figure>
        );
    }

export default Expense;

