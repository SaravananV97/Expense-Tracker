import React, {Component} from "react";
import "./expense.css";
import NavBar from "../../Components/Navbar/navbar";
import axios from "axios";
import Card from "../../Components/Card/card";
class Expenses extends Component {

    constructor(props){
        super(props);
        this.state = {expenses: null};
    }

    componentDidMount(){
        const user_id = this.props.match.params.id;
        axios.get(`/api/expenses/showexpenses/${user_id}`)
        .then((expenses) => {
            this.setState({expenses: expenses.data.expenses});
        })
        .catch(err => console.log(err));
    }

    render() {
        if(this.state.expenses == null)
            return (<div>Loading...</div>);
        return (
            <div className = "Body" >
            <NavBar currentUserId = {this.props.match.params.id}></NavBar>
            <div className = "container">
               {this.state.expenses.map((val, i) => {
                    return <Card key = {i} expense = {val}  count = {i+1} />
               })} 
            </div>
            </div>
        );
    }
}
export default Expenses;

