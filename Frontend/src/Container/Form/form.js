import React, {Component} from "react";
import Field from "../../Components/Form/formfield";
import "../../Components/Form/field.css";
import axios from "axios";
class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            successMsg: false,
            details:"",
            amount:0,
            catagory:"",
            date: new Date().toLocaleDateString(),
            currentUser: ""
        }
    }

    componentDidMount(){
        axios.get("/api/expenses/test").then(res => console.log(res.data.msg))
        .catch(err => console.log(err))
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
        const val = this.state;
        axios.post("/api/expenses/add", {expense:val})
        .then((res) => {
            if(res.status === 200)
                this.setState({successMsg: true});
        })
        .catch(err => console.log(err));
    }

    detailsChange = (event) => {
        this.setState({details: event.target.value});
    }

    amountChange = (event) => {
        this.setState({amount: event.target.value});
    }
    
    render(){
        const successMsg = <p style = {{"color": "#fff"}}>Expense Added Successfully</p>;
        return (
            <form className = "text-center border border-light p-5">
            <div className = "Align">
                <Field dateChange = {this.dateChange} type = "date" fieldtype = "date"></Field>
                <Field dropDownChange = {this.dropDownChange} stuffs = {this.props.list} fieldtype = {"dropdown"} ></Field>
                <Field onChange = {this.detailsChange} fieldtype = {"input"} type = "text" placeholder = {this.props.details}></Field>
                <Field onChange = {this.amountChange} fieldtype = {"input"}  type = "text" placeholder = {this.props.amount}></Field>
                {this.state.successMsg?successMsg:null}
               <div className = "BtnContainer">
                <Field id = "SubmitExpense" onClick = {this.handleClick} type = "submit" value = {this.state.successMsg?"Add More?":this.props.button}></Field>
                <button onClick = {this.props.cancelClick} className = "btn btn-danger">Cancel</button>
                </div>
            </div>
            </form>
        );
    }
}

export default Form;
