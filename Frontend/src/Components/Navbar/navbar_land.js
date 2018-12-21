import React from "react";
import NavItem from "../NavItem/navItem";
import logo from "../NavItem/icon.jpg";
const navBar = (props) => {

const img = <img src= {logo} height = "35px" width = "35px" alt="Loading" />
console.log(props);
return (
<nav className="navbar navbar-expand-md navbar-dark bg-dark">

    <div className="mx-auto order-0">
        <a className="navbar-brand navbar-brand-logo mx-auto" href="#">Expense {img} Tracker </a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span className="navbar-toggler-icon"></span>
        </button> */}
    </div>

</nav>
    );
};

export default navBar;

