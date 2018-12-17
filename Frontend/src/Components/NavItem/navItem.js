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
        const href = `http://localhost:3000/${this.props.href}`
        return(
            <li key = {this.props.children} className="nav-item">
                <a className="nav-link" href = {href}>{this.props.children}</a>
            </li>   
    );
}
}
export default NavItem;
