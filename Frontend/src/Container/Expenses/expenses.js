import React, {Component} from "react";
import "./expense.css";
import NavBar from "../../Components/Navbar/navbar";
import axios from "axios";
import Pagination from "react-js-pagination";
import Card from "../../Components/Card/card";
import {connect} from "react-redux";
// require("bootstrap");
class Expenses extends Component {

    constructor(props){
        super(props);
        this.state = {expenses: null, activePage:1};
    }

    componentDidMount(){
        const user_id = this.props.match.params.id;
        axios.defaults.headers.common["Authorization"] = localStorage.getItem("auth_token");
        if(this.state.expenses == null){
        axios.get(`/api/expenses/showexpenses/${user_id}`)
        .then((expenses) => {
            this.setState({expenses: expenses.data.expenses});
        })
        .catch(err =>{
            if(err){
                this.props.history.push("/");
            }
        } );
    }
}

    handleChange = (page) => {
        this.setState({activePage: page});
    }

    render(){
        if(this.state.expenses == null)
        return (<div>Loading...</div>);
        const itemPerPage = 2;
        const activePage = this.state.activePage;
        const start_index = (activePage-1) * itemPerPage;
        const end_index = start_index + itemPerPage;
        const toRender = this.state.expenses.slice(start_index, end_index); 
    return(
    <div>
        <NavBar currentUserId = {this.props.match.params.id}></NavBar>
        <div className = "container">
            {toRender.map((val, i)=>(<Card  isExpense = {true} key = {i} expense = {val}  count = {i+1} />))}
        </div>
        <div className = "AfterCard">
        <Pagination 
                    className = "pagination"
                    activePage = {this.state.activePage}
                    itemsCountPerPage = {itemPerPage}
                    totalItemsCount = {this.state.expenses.length}
                    pageRangeDisplayed = {5}    
                    onChange = {this.handleChange} />
        </div>
    </div>);
        }
    }
export default connect(null, null)(Expenses);

