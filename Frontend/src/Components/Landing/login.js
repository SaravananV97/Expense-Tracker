import React, {Component} from "react";
import "./landing.css";
import validate from "./validation/validation"; 
import {TextField, Button, FormHelperText} from "@material-ui/core";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {
                email:"",
                password:""    
            }
        }
    }
1
    handleLoginClick = () => {
        const fields = {...this.state}
        const errors = {...validate(fields)};
        if(Object.keys(errors).length > 0)
            this.setState({errors});
        else{
            //Axios Post...
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
            <h4>New User? <button className = "Link" onClick = {this.props.handleRegisterLogin}>Register</button> here</h4>
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
                    className = "TextField"
                    hintText="Password"
                    onChange = {this.handleChange("password")}                    floatingLabelText="Password"
                    type="password">
                </TextField>
                <FormHelperText style = {errorStyle}>{this.state.errors.password}</FormHelperText>
                <div className = "Buttons">
                    <Button onClick = {this.handleLoginClick} variant = "contained">Login</Button>
                </div>
            </div>
            </form>
        );
    }

}

export default Login;
