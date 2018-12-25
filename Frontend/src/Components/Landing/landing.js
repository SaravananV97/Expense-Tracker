import React, {Component} from "react";
import "./landing.css";
import NavBar from "../Navbar/navbar_land";
import Register from "./register";
import Login from "./login";
class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggingIn: false,
        }
    }
    handleIsLogging = () => {
        this.setState({isLoggingIn: !this.state.isLoggingIn});
    }

 render(){
    return (
        <div className = "Body">
        <NavBar />
        {this.state.isLoggingIn?<Login handleRegisterLogin = {this.handleIsLogging} />:<Register handleRegisterLogin ={this.handleIsLogging} />}
    </div>
    );
    }
}


export default Landing;

