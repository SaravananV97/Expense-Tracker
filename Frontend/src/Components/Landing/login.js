import React, {Component} from "react";
import "./landing.css";
import validate from "./validation/validation"; 
import {TextField, Button, FormHelperText} from "@material-ui/core";
import axios from "axios";
import * as actionCreators from "../../Store/Actions/actionsCreators";
import jwt_decode from "jwt-decode";
import {connect} from "react-redux";
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
    handleLoginClick = () => {
        const fields = {...this.state}
        const errors = {...validate(fields)};
        this.setState({errors});
        if(Object.keys(errors).length <= 0){
            axios.post("/api/users/login", fields).then((res) =>{
                if(res.data.password !== undefined)
                    this.setState({errors:{password:res.data.password}});
                else if(res.data.email !== undefined)
                    this.setState({errors:{email: res.data.email}});
                else{
                    const token = res.data.jwt;
                    localStorage.setItem("auth_token", `Bearer ${token}`);
                    this.props.setIsAuthenticated();
                    // console.log(token);
                    // console.log(axios.defaults.headers.common);
                    // setAuthTokenToHeader(token);
                    const id = jwt_decode(token).id;
                    this.props.history.push(`/home/${id}`)
                }
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
                    onChange = {this.handleChange("password")} 
                    floatingLabelText="Password"
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

const mapDispatchToProps = (dispatch) => {
    return {
        setIsAuthenticated: () => dispatch(actionCreators.toggleIsAuthenticated(true))
    }
}

export default connect(null, mapDispatchToProps)(Login);
