import React, {Component} from "react";
import {Doughnut} from 'react-chartjs-2';


class Chart extends Component{

  constructor(props){
    super(props);
    console.log(props);
  }

componentWillReceiveProps(nextProps){
  console.log("New Props...")
  console.log(nextProps);
}

  render(){
    let data= {
      labels: ["Expense", "Income"],
      datasets: [{
      label: "My First dataset",
      backgroundColor: ['rgb(209, 107, 60)','rgb(6, 137, 35)'],
      borderColor: 'rgb(191, 99, 13)',
      data: [parseInt(this.props.expense), parseInt(this.props.holdings) ],
      }]
    };
      return(
        <Doughnut data = {data} height = {30} width = {80}></Doughnut>
      );
  }

}

export default Chart;
