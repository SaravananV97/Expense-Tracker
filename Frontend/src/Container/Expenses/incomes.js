import React, {Component} from "react";
import "./expense.css";
import NavBar from "../../Components/Navbar/navbar";
import axios from "axios";
import {connect} from "react-redux";
import Pagination from "react-js-pagination";
import Card from "../../Components/Card/card";
class Incomes extends Component {

    constructor(props){
        super(props);
        this.state = {incomes: null, activePage: 1};
    }

    componentDidMount(){
        const user_id = this.props.match.params.id;
        axios.defaults.headers.common["Authorization"] = localStorage.getItem("auth_token");
        axios.get(`/api/expenses/showincomes/${user_id}`)
        .then((incomes) => {
            // console.log(incomes);
            this.setState({incomes: incomes.data.incomes});
        })
        .catch(err =>{
            if(err){
                this.props.history.push(`/`);
            }
        });
    }

    handleChange = (page) => {
        this.setState({activePage: page});
    }

    render(){
        if(this.state.incomes == null)
        return (<div>Loading...</div>);
        const itemPerPage = 10;
        const activePage = this.state.activePage;
        const start_index = (activePage-1) * itemPerPage;
        const end_index = start_index + itemPerPage;
        const toRender = this.state.incomes.slice(start_index, end_index); 
    return(
    <div>
        <NavBar currentUserId = {this.props.match.params.id}></NavBar>
        <div className = "container">
            {toRender.map((val, i)=>(<Card  isExpense = {false} key = {i} expense = {val}  count = {i+1} />))}
        </div>
        <div className = "AfterCard">
        <Pagination 
                    className = "pagination"
                    activePage = {this.state.activePage}
                    itemsCountPerPage = {itemPerPage}
                    totalItemsCount = {this.state.incomes.length}
                    pageRangeDisplayed = {5}    
                    onChange = {this.handleChange} />
        </div>
    </div>);
        }
}
export default connect(null, null)(Incomes);

