import isEmpty from "../../../validation/isEmpty";
// const val = {amount: this.props.amount, currentUser: this.props.currentUser, date: this.props.date, 
//     catagory: this.props.category, details: this.props.details};

const validateForm = (obj) => {
    
    let errorMsgs = [];
    let dateRegex = /^\d{4}[./-]\d{2}[./-]\d{2}$/
    if(!dateRegex.test(obj.date))
        errorMsgs.push("Please fi11ll a Valid Date");
    console.log("validating...")
    let amount = obj.amount;
    if(isEmpty(amount) || amount <= 0 || isNaN(amount))
        errorMsgs.push("Please enter a valid amount");
    if(obj.catagory === "Select" || isEmpty(obj.catagory))
        errorMsgs.push("Please Select a catagory")
    console.log(obj.details.length)
    if(obj.details.length < 5)
        errorMsgs.push("Please fill details with atleast 5 characters")
    return errorMsgs;
    
}

export default validateForm;


