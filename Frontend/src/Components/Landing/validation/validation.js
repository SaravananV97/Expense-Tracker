import validator from "validator";
import isEmpty from "../../../validation/isEmpty";

const validate = (obj) => {
    console.log(obj.firstName);
   let errorMsgs = {};
    if(!isEmpty(obj.email)){
        if(!validator.isEmail(obj.email))
         errorMsgs.email = "Enter a valid email";
    }
    else errorMsgs.email = "Email can't be Empty";

    if(!isEmpty(obj.password)){
        if(obj.password.length < 6) 
            errorMsgs.password = "Password must be atleast 6 characters";
    }
    else 
        errorMsgs.password = "Password can't be Empty";
    if(!isEmpty(obj.firstName)){
        if(obj.firstName.length < 3) 
            errorMsgs.firstName = "Names must have atleast 3 characters";
    }
    else{
        if(obj.firstName !== undefined)
            errorMsgs.firstName = "Firstname can't be Empty";
    }
    if(isEmpty(obj.lastName)){
        if(obj.lastName !== undefined)
        errorMsgs.lastName = "Lastname can't be empty";
    }
    return errorMsgs;
}

export default validate;
