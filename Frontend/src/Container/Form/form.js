import React, {Component} from "react";
import Field from "../../Components/Form/formfield";
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

    handleIncomeClick = (event) => {
        event.preventDefault();
        console.log("Handling Adding Income Click....")
        const val = {amount: this.props.amount, currentUser: this.props.currentUser, date: this.props.date, 
            catagory: this.props.category, details: this.props.details};
        console.log(val);
        axios.post("/api/expenses/addincome", {income:val})
        .then((res) => {
            if(res.status === 200){
                this.props.setSuccessmsg(true);
            console.log(res);
            }
        })
        .catch(err => console.log(err));
    }

    handleExpenseClick = (event) => {
        event.preventDefault();
        console.log("Handling Expensive CLick....");
        const val = {amount: this.props.amount, currentUser: this.props.currentUser, date: this.props.date, 
            catagory: this.props.category, details: this.props.details};
        console.log(val); 
        axios.post("/api/expenses/add", {expense:val})
        .then((res) => {
            if(res.status === 200){
                this.props.setSuccessmsg(true);
            console.log(res);
            }
        })
        .catch(err => console.log(err));
    }

    detailsChange = (event) => {
        this.props.setAddDetails(event.target.value);
    }

    amountChange = (event) => {
        this.props.setAmount(event.target.value);
    }
    
    render(){
        const successMsg = <p style = {{"color": "#fff"}}>{this.props.exp_inc?"Expense":"Income"} Added Successfully</p>;
        return (
            <form className = "text-center border border-light p-5">
            <div className = "Align">
                <Field dateChange = {this.dateChange} type = "date" fieldtype = "date"></Field>
                <Field dropDownChange = {this.dropDownChange} stuffs = {this.props.list} fieldtype = {"dropdown"} ></Field>
                <Field onChange = {this.detailsChange} fieldtype = {"input"} type = "text" placeholder = {this.props.details_placeholder}></Field>
                <Field onChange = {this.amountChange} fieldtype = {"input"}  type = "text" placeholder = {this.props.amount_placeholder}></Field>
                {this.props.successMsg?successMsg:null}
               <div className = "BtnContainer">
                <Field id = "SubmitExpense" onClick = {this.props.exp_inc?this.handleExpenseClick:this.handleIncomeClick} 
                type = "submit" value = {this.props.successMsg?"Add More?":this.props.button}></Field>
                <button onClick = {this.props.cancelClick} className = "btn btn-danger">Cancel</button>
                </div>
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
        category: state.form.catagory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAddDetails: (details) => dispatch(actionCreators.changeAdditionDetails(details)),
        setAmount: (amount) => dispatch(actionCreators.changeAmount(amount)),
        setCurrentUser: (id) => dispatch(actionCreators.setCurrentUser(id)),
        setDate: (date) => dispatch(actionCreators.changeDate(date)),
        setSuccessmsg: (payload) => dispatch(actionCreators.changeSuccessMsg(payload)),
        setCatagory: (catagory) => dispatch(actionCreators.changeCategory(catagory))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
