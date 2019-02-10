import React from "react";
import NavItem from "../NavItem/navItem";
import logo from "../NavItem/icon.jpg";
const navBar = (props) => {

const img = <img src= {logo} height = "35px" width = "35px" alt="Loading" />
console.log(props);
return (

<nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <NavItem href = {`home/${props.currentUserId}`} className = "active">Home</NavItem>
            {props.is_home?<NavItem>Welcome, {props.currentUser}</NavItem>:null}
            <NavItem href = {`expenses/${props.currentUserId}`}>Expenses</NavItem>
            <NavItem href = {`incomes/${props.currentUserId}`}>Incomes</NavItem>
        </ul>
    </div>
    <div className="mx-auto order-0">
        <a className="navbar-brand navbar-brand-logo mx-auto" href="#">Expense {img} Tracker </a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button> */}
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a onClick = {props.logout_clicked} className="nav-link" href="/">Logout</a>
            </li>
        </ul>
    </div>
</nav>
    );
};

export default navBar;

