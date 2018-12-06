import * as actionTypes from "./actionTypes";

export const addingIncomeCreator = () => {
    return {type: actionTypes.addingIncome}
}

export const addingExpenseCreator = () => {
    return {type: actionTypes.addingExpense}
}

export const modifyExpenseCreator = () => {
    return {type: actionTypes.modifyExpense}
}

export const modifyHoldingsCreator = () => {
    return { type: actionTypes.modifyHoldings}
}

export const cancelAdditionCreator = (user_id) => {
    console.log(user_id);
    return { type: actionTypes.cancelAddition, payload: user_id };
}

export const setUserDetails = (data) => {
    return {type: actionTypes.setDetails, data }
}

export const getUserInfoSuccess = (data) => {
    return {type: actionTypes.getUserInfoSuccess, payload: {...data}}
}

export const getUserInfoFailure = (err) => {
    return {type: actionTypes.getUserInfoFailure, payload: {...err}}
}

