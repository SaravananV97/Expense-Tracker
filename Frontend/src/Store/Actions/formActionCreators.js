import * as actionTypes from "./actionTypes";

export const changeSuccessMsg = (payload) => {
    return {type: actionTypes.successMsg, payload}
}

export const changeAdditionDetails = (details) => {
    return {type: actionTypes.setAdditionDetails, payload: details}
}

export const changeAmount = (amount) => {
    return {type: actionTypes.setAmount, payload: amount}
}

export const setCurrentUser = (user) => {
    return {type: actionTypes.setCurrentUser, payload: user}
}

export const changeDate = (date) => {
    return {type: actionTypes.dateSet, payload: date}
}

export const changeCategory = (category) => {
    return {type: actionTypes.catagorySet, payload: category}
}
