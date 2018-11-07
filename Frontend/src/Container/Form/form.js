import React, {Component} from "react";
import Field from "../../Components/Form/formfield";
import "../../Components/Form/field.css";
import axios from "axios";
class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            details:"",
            amount:0,
            catagory:"",
            date: new Date().toLocaleDateString(),
            currentUser: ""
        }
    }

    componentDidMount(){
        this.setState({currentUser: this.props.current_user});
    }

    dateChange = (event) => {
        this.setState({date: event.target.value});
    }
 
    dropDownChange = (event) => {
        console.log("Changing Date...");
        this.setState({catagory: event.target.value});
    }

    handleClick = (event) => {
        event.preventDefault();
        axios.post("/api/expenses/add", {expense: this.state})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    detailsChange = (event) => {
        this.setState({details: event.target.value});
    }

    amountChange = (event) => {
        this.setState({amount: event.target.value});
    }
    
    render(){
        
        return (
            <form className = "text-center border border-light p-5">
            <div className = "Align">
                <Field dateChange = {this.dateChange} type = "date" fieldtype = "date"></Field>
                <Field dropDownChange = {this.dropDownChange} stuffs = {this.props.list} fieldtype = {"dropdown"} ></Field>
                <Field onChange = {this.detailsChange} fieldtype = {"input"} type = "text" placeholder = {this.props.details}></Field>
                <Field onChange = {this.amountChange} fieldtype = {"input"}  type = "text" placeholder = {this.props.amount}></Field>
               <div className = "BtnContainer">
                <Field id = "SubmitExpense" onClick = {this.handleClick} type = "submit" value = {this.props.button}></Field>
                <button onClick = {this.props.cancelClick} className = "btn btn-danger">Cancel</button>
                </div>
            </div>
            </form>
        );
    }
}

export default Form;
