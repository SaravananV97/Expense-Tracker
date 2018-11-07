import React from "react";
import NavItem from "../NavItem/navItem";
import logo from "../NavItem/icon.jpg";
const navBar = (props) => {

const img = <img src= {logo} height = "35px" width = "35px" alt="Loading" />
return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
            <NavItem classNameName = "active">Home</NavItem>
            <NavItem>Welcome, {props.currentUser}</NavItem>
            <NavItem>Login</NavItem>
            <NavItem>Signup</NavItem>
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
                <a className="nav-link" href="#">Right</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
        </ul>
    </div>
</nav>
    );
};

export default navBar;

