import React, {Component} from "react";
import "./trackerbuilder.css";
import NavBar from "../../Components/Navbar/navbar"
import AddButtons from "../../Components/Buttons/buttons";
import Chart from "../../Components/Chart/chart";
import {connect} from "react-redux";

import Modal from "../../Components/Modal/modal";
import Form from "../../Container/Form/form";
import * as actionTypes from "../../Store/actions";
import Backdrop from "../../Components/Backdrop/backdrop";
class Tracker extends Component{
    
    constructor(props){
        super();
        this.state = {
            currentUserId: "",
            currentHoldings: 0,
            currentUser: "",
            currentExpense: 0,
            currentIncome: 0
        }
    }

    componentDidMount(){
        if(this.props.location.search){
            const query = new URLSearchParams(this.props.location.search);
            let params = [];
            for(let param of query.entries())
                params.push(param[1]);
            this.setState({currentUserId: params[0], currentUser: params[1], currentHoldings:params[2], currentExpense: params[3],
                        currentIncome: params[2] - params[3]});
        }
    }

    render(){
        console.log(this.state);
       return (
            <div>
                <Backdrop show = {this.props.addingIncome || this.props.addingExpense}></Backdrop>
                <NavBar currentUser = {this.state.currentUser}></NavBar>
                <Chart expense = {this.state.currentExpense} holdings = {this.state.currentHoldings}></Chart>
                <Modal show = {this.props.addingExpense}><Form
                details = "Expense Details" current_user = {this.state.currentUserId} amount = "Amount Spent" 
                button = "Add Expense" list = {["Food", "Travel", "Movies", "Party"]}
                 cancelClick = {this.props.onCancelClick}>
                </Form></Modal>
                <Modal show = {this.props.addingIncome}><Form
                details = "Income Details" amount = "Amount being added" 
                button = "Add Income" list = {["Salary", "Deposit", "Savings"]}
                 cancelClick = {this.props.onCancelClick}>
                </Form></Modal>
                <AddButtons incomeClick = {this.props.onAddIncomeClick} expenseClick = {this.props.onAddExpenseClick}></AddButtons>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        currentUserId:  state.userInfo.currentUserId,
        currentHoldings: state.userInfo.currentHoldings,
        addingIncome: state.addingIncome,
        addingExpense: state.addingExpense,
        currentUser: state.userInfo.currentUser,
        currentExpense: state.userInfo.currentExpense,
        currentIncome: state.userInfo.currentIncome
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddExpenseClick: () => dispatch({type:actionTypes.addingExpense}),
        onAddIncomeClick: () => dispatch({type: actionTypes.addingExpense }),
        onCancelClick: () => dispatch({type: actionTypes.cancelAddition}),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);

