import React, {Component} from "react";
import Expense from "./expense";
import axios from "axios";
import { throws } from "assert";
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
            <div className = "container">
               {this.state.expenses.map((val, i) => {
                    return <Expense key = {i} expense = {val} />
               })} 
            </div>
        );
    }
}
export default Expenses;

