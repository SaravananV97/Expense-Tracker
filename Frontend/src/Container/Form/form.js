import React, {Component} from "react";
import Field from "../../Components/Form/formfield";
import validate from "./Validation/validation";
import "../../Components/Form/field.css";
import axios from "axios";
import {connect} from "react-redux";
import * as actionCreators from "../../Store/Actions/formActionCreators";
class Form extends Component{

    componentDidMount(){
        this.props.setSuccessmsg(false);
        this.props.setCurrentUser(this.props.current_user)
    }

    componentWillUnmount(){
        this.props.setSuccessmsg(false);
        this.props.update_details(this.props.current_user);
        console.log(this.props);       
    }

    dateChange = (event) => {
        this.props.setDate(event.target.value)
    }
 
    dropDownChange = (event) => {
        this.props.setCatagory(event.target.value);
    }

    handleIncomeClick = (val) => {
        console.log("Handling Adding Income Click....")
        axios.post("/api/expenses/addincome", {income:val})
        .then((res) => {
            if(res.status === 200){
                this.props.setSuccessmsg(true);
            console.log(res);
            }
        })
        .catch(err => console.log(err));
    }

    handleExpenseClick = (val) => {
        console.log("Handling Expensive CLick....");
        axios.post("/api/expenses/add", {expense:val})
        .then((res) => {
            if(res.status === 200){
                this.props.setSuccessmsg(true);
            console.log(res);
            }
        })
        .catch(err => console.log(err));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const val = {amount: this.props.amount, currentUser: this.props.currentUser, date: this.props.date, 
            catagory: this.props.category, details: this.props.details};
        console.log(val);
        const errMsgs = validate(val);
        this.props.displayErrors(errMsgs);
        if(errMsgs.length === 0)
            this.props.exp_inc?this.handleExpenseClick(val):this.handleIncomeClick(val)
        console.log(errMsgs);
    }

    cancelClick = ()  =>{
        console.log("Click Cancelled...");
        this.props.formCancelClick();
        this.props.cancelClick(this.props.current_user);
    } 

    detailsChange = (event) => {
        this.props.setAddDetails(event.target.value);
    }

    amountChange = (event) => {
        this.props.setAmount(event.target.value);
    }
    
    render(){
        console.log(this.props.errors);
        const errorMsgs = (
            <div>
            <ul>
                {this.props.errors.map((msg, i) => {
                return<li key = {i}>{msg}</li>
            })}
            </ul>
            </div>
        )

        const successMsg = <p style = {{"color": "#fff"}}>{this.props.exp_inc?"Expense":"Income"} Added Successfully</p>;
        return (
            <form className = "text-center border border-light p-5">
            <div className = "Align">
                <Field dateChange = {this.dateChange} type = "date" fieldtype = "date" />
                <Field data dropDownChange = {this.dropDownChange} stuffs = {this.props.list} fieldtype = {"dropdown"} ></Field>
                <Field onChange = {this.detailsChange} fieldtype = {"input"} type = "text" placeholder = {this.props.details_placeholder}></Field>
                <Field onChange = {this.amountChange} fieldtype = {"input"}  type = "text" placeholder = {this.props.amount_placeholder}></Field>
                {this.props.successMsg?successMsg:null}
            </div>
            <div className = "Errors">
                {this.props.errors.length>0?errorMsgs:null}
            </div>
               <div className = "BtnContainer">
                <button onClick = {this.handleSubmit} id = "addBtn" className = "btn btn-primary addBtn" >{this.props.successMsg?"Add More?":this.props.button}</button>
                <button onClick = {this.cancelClick} className = "btn btn-danger">Cancel</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.form.currentUser,
        successMsg: state.form.successMsg,
        details: state.form.details,
        amount: state.form.amount,
        date: state.form.date,
        category: state.form.catagory,
        errors: state.form.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAddDetails: (details) => dispatch(actionCreators.changeAdditionDetails(details)),
        setAmount: (amount) => dispatch(actionCreators.changeAmount(amount)),
        setCurrentUser: (id) => dispatch(actionCreators.setCurrentUser(id)),
        setDate: (date) => dispatch(actionCreators.changeDate(date)),
        setSuccessmsg: (payload) => dispatch(actionCreators.changeSuccessMsg(payload)),
        setCatagory: (catagory) => dispatch(actionCreators.changeCategory(catagory)),
        formCancelClick: () => dispatch(actionCreators.cancelClick()),
        displayErrors: (errors) => dispatch(actionCreators.displayErrors(errors))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
