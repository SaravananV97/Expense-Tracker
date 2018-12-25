import React from "react";
import "./field.css";
import Dropdown from "../../Container/DropDown/dropdown";
const Field = (props) => {
    let field = null;
    let labelStyle = {marginRight: "7px", color: "white"}
    switch(props.fieldtype){
        case "textarea":
            field = <textarea className = "form-control" {...props}></textarea>;
            break;
        case "dropdown":
            field = (<div className = "form-inline d-flex justify-content-around">
                    <label style = {labelStyle}> Choose one Category</label>
                    <Dropdown className = "form-control mb-4" {...props} />
                    </div>);
            break;
        case "date":
                field = (<div className = "form-inline d-flex justify-content-around">
                    <label style = {labelStyle}>Date: </label>
                    <input onChange = {props.dateChange} type = "date" />
                </div>
                );
                break;
        default:
            field = <input {...props} className = "form-control mb-4"  {...props} />;
    }
        return (
        <div className = "form-inline">
        <div className ="col-md-12 form-group">
        {field}
        </div>
        </div>
        );
}

export default Field;
