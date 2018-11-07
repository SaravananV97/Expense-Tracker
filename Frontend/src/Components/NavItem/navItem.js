import React, {Component} from "react";
class NavItem extends Component{

    constructor(props){
        super();
        this.state  = {
            clicked: false
        }
    }

    loginClicked = () => {
        console.log("Login Clicked...")
        this.setState({clicked: true})
    }

    render(){

        return(
            <li key = {this.props.children} className="nav-item">
                <a className="nav-link" href = "http://localhost:5000/api/users/login">{this.props.children}</a>
            </li>   
    );
}
}
export default NavItem;
