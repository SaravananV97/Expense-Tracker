import React from "react";
import {Doughnut} from 'react-chartjs-2';

const chart = (props) => {

  let data= {
    labels: ["Expense", "Income"],
    datasets: [{
    label: "My First dataset",
    backgroundColor: ['rgb(209, 107, 60)','rgb(6, 137, 35)'],
    borderColor: 'rgb(191, 99, 13)',
    data: [props.holdings, props.expense],
    }]
}

    return(
        <Doughnut data = {data} height = {30} width = {80}></Doughnut>
      );
    }

export default chart;