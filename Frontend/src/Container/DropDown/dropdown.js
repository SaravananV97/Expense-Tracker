import React, {Component} from "react";

class Dropdown extends Component{

    constructor(props){
        super(props);
        const categories = this.props.stuffs.map((val) => {
            return {name:val, value: val};
        });
        this.state = {
            catagories: [{name:"Select", value: null}, ...categories]
        }
    }

    assignOptions = () => {
        const catagories = this.state.catagories.slice();
       return catagories.map((val,i) => {return <option key ={i}>{val.name}</option>})
    }

    render(){
        return(
            <select onChange = {this.props.dropDownChange}>
                {this.assignOptions()}
            </select>
        )
    }
}

export default Dropdown;
