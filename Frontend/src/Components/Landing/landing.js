import React, {Component} from "react";
import {TextField, Button} from "@material-ui/core";
import "./landing.css";
import NavBar from "../Navbar/navbar_land";
class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email:"",
            password:"",
            showPassword: false
        }
    }

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword});
    }

    handleChange = (name) =>{
        return (event) => this.setState({[name]: event.target.value});
    }

 render(){
    return (
        <div className = "Body">
        <NavBar />
    <form>
        <div className = "Container">
        <h4>New User? Sign Up here!</h4>
        <TextField
          label="Firstname"
          className= "TextField"
          value={this.state.name}
          onChange={this.handleChange('firstName')}
          margin="normal"
        />
        <TextField
          label="Lastname"
          className= "TextField"
          value={this.state.name}
          onChange={this.handleChange('lastName')}
          margin="normal"
        />
         <TextField
          label="Email"
          className= "TextField"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
<TextField ref='password'
    label = "Password"
    className = "TextField"
    hintText="Password"
    floatingLabelText="Password"
    type="password">
</TextField>
    <div>
        <Button variant="contained">Sign up</Button>
        <Button variant = "contained">Login</Button>
    </div>
    </div>
    </form>
    </div>
 
    );
    }
}


export default Landing;

