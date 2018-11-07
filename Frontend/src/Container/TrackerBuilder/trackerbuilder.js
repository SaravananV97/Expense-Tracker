import React, {Component} from "react";
import "./trackerbuilder.css";
import NavBar from "../../Components/Navbar/navbar"
import AddButtons from "../../Components/Buttons/buttons";
import Chart from "../../Components/Chart/chart";
import Modal from "../../Components/Modal/modal";
import Form from "../../Container/Form/form";
import Backdrop from "../../Components/Backdrop/backdrop";
class Tracker extends Component{

    constructor(props){
        super();
        this.state = {
            currentUserId: "",
            currentHoldings: 0,
            addingIncome: false,
            addingExpense: false,
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

    cancelClickHandler = (event) => {
        event.preventDefault();
        this.setState({addingExpense:false, addingIncome:false});
    }

    expenseClickHandler = () => {
        this.setState({addingExpense: true});
        console.log("Adding Expense Clicked");
}

    incomeClickHandler = () => this.setState({addingIncome: true});

    render(){
       return (
            <div>
                <Backdrop show = {this.state.addingIncome || this.state.addingExpense}></Backdrop>
                <NavBar currentUser = {this.state.currentUser}></NavBar>
                <Chart expense = {this.state.currentExpense} holdings = {this.state.currentHoldings}></Chart>
                <Modal show = {this.state.addingExpense}><Form
                details = "Expense Details" current_user = {this.state.currentUserId} amount = "Amount Spent" 
                button = "Add Expense" list = {["Food", "Travel", "Movies", "Party"]}
                 cancelClick = {this.cancelClickHandler}>
                </Form></Modal>
                <Modal show = {this.state.addingIncome}><Form
                details = "Income Details" amount = "Amount being added" 
                button = "Add Income" list = {["Salary", "Deposit", "Savings"]}
                 cancelClick = {this.cancelClickHandler}>
                </Form></Modal>
                <AddButtons incomeClick = {this.incomeClickHandler} expenseClick = {this.expenseClickHandler}></AddButtons>
            </div>
        );
    }
}

export default Tracker;

