import * as actionTypes from "../Actions/actionTypes";

const initState = {
    successMsg: false,
    details:"",
    amount:0,
    catagory:"",
    date: new Date().toLocaleDateString(),
    currentUser: ""
}

const formReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.successMsg:
            return {...state, successMsg:action.payload}
        case actionTypes.catagorySet:
            return {...state, catagory: action.payload}
        case actionTypes.dateSet:
            return {...state, date: action.payload}
        case actionTypes.setCurrentUser:
            return {...state, currentUser: action.payload}
        case actionTypes.setAmount:
            return {...state, amount: Number(action.payload)}
        case actionTypes.setAdditionDetails:
            return {...state, details: action.payload}
        default: return state
    }
}
export default formReducer;
