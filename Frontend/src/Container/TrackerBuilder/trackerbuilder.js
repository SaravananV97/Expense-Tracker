import React, {Component} from "react";
import "./trackerbuilder.css";
import NavBar from "../../Components/Navbar/navbar";
import * as asyncActionCreators from "../../Store/Actions/axios-actions";
import AddButtons from "../../Components/Buttons/buttons";
import Chart from "../../Components/Chart/chart";
import {connect} from "react-redux";
import axios from "axios";
import Modal from "../../Components/Modal/modal";
import Form from "../../Container/Form/form";
import * as actionCreators from "../../Store/Actions/actionsCreators";
import Backdrop from "../../Components/Backdrop/backdrop";
class Tracker extends Component{
    
    constructor(props){
        super();
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/api/users/userdetails/${id}`).then((details) => 
        {
            console.log(details);
            this.props.setDetails(details);
    });
        }

    render(){
        console.log(this.props)
       return (
            <div className = "Body">
                <Backdrop show = {this.props.addingIncome || this.props.addingExpense}></Backdrop>
                <NavBar is_home = {true} currentUserId = {this.props.currentUserId} currentUser = {this.props.currentUser}></NavBar>
                <Chart expense = {this.props.currentExpense} holdings = {this.props.currentHoldings}></Chart>
                <Modal show = {this.props.addingExpense}><Form update_details = {this.props.modifyDetails}
                details_placeholder = "Expense Details" exp_inc = {this.props.addingExpense} current_user = {this.props.currentUserId} amount_placeholder = "Amount Spent" 
                button = "Add Expense" list = {["Food", "Travel", "Movies", "Party"]}
                 cancelClick = {this.props.onCancelClick}>
                </Form></Modal>
                <Modal show = {this.props.addingIncome}><Form update_details = {this.props.modifyDetails}
                details_placeholder = "Income Details" {...this.props} current_user = {this.props.currentUserId} amount_placeholder = "Amount being added" 
                button = "Add Income" list = {["Salary", "Deposit", "Savings"]}
                 cancelClick = {() => this.props.onCancelClick(this.props.currentUserId)}>
                </Form></Modal>
                <AddButtons incomeClick = {this.props.onAddIncomeClick} expenseClick = {this.props.onAddExpenseClick}></AddButtons>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUserId:  state.main.userInfo.currentUserId,
        currentHoldings: state.main.userInfo.currentHoldings,
        addingIncome: state.main.addingIncome,
        addingExpense: state.main.addingExpense,
        currentUser: state.main.userInfo.currentUser,
        currentExpense: state.main.userInfo.currentExpense,
        currentIncome: state.main.userInfo.currentIncome,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        modifyDetails: (user_id) => dispatch(asyncActionCreators.getUserInfoAsync(user_id)),
        setDetails: (details) => dispatch(actionCreators.setUserDetails(details)),
        onAddExpenseClick: () => dispatch(actionCreators.addingExpenseCreator()),
        onAddIncomeClick: () => dispatch(actionCreators.addingIncomeCreator()),
        onCancelClick: (user_id) => dispatch(actionCreators.cancelAdditionCreator(user_id)),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);

