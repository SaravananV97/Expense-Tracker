import React, {Component} from "react";
import {TextField, Button} from "@material-ui/core";
import "./landing.css";
import validate from "./validation/validation"; 
import { FormHelperText} from "@material-ui/core";
import axios from "axios";

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email:"",
            password:"",
            errors: {
                firstName: "",
                lastName: "",
                email:"",
                password:""    
            }
        }
    }

    handleRegisterClick = () => {
        console.log("Register Clicked...")
        const fields = {...this.state}
        const errors = {...validate(fields)};
        this.setState({errors});
        if(Object.keys(errors).length <= 0){
            axios.post("/api/users/register", fields).then((res) =>{
                if(res.data.email !== undefined)
                    this.setState({errors:{email:res.data.email}});
            })
            .catch((err) => console.log(err));
        }
    }
    handleChange = (name) =>{
        return (event) => this.setState({[name]: event.target.value});
    }

 render(){
     let errorStyle = {"color": "red"};
    return (
    <form>
        <div className = "Container">
        <h4>New User? Sign Up here! or <button className = "Link" href = "#" onClick  = {this.props.handleRegisterLogin}>Login</button></h4>
        <TextField
          label="Firstname"
          className= "TextField"
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
        />
        <FormHelperText style = {errorStyle}>{this.state.errors.firstName}</FormHelperText>
        <TextField
          label="Lastname"
          className= "TextField"
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
        />
        <FormHelperText style = {errorStyle}>{this.state.errors.lastName}</FormHelperText>
         <TextField
          label="Email"
          className= "TextField"
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <FormHelperText style = {errorStyle}>{this.state.errors.email}</FormHelperText>
<TextField ref='password'
    label = "Password"
    onChange = {this.handleChange("password")}
    className = "TextField"
    value = {this.state.password}
    hintText="Password"
    floatingLabelText="Password"
    type="password">
</TextField>
<FormHelperText style = {errorStyle}>{this.state.errors.password}</FormHelperText>
    <div>
        <Button onClick = {this.handleRegisterClick} variant="contained">Sign up</Button>
    </div>
    </div>
    </form> 
    );
    }
}


export default Register;

