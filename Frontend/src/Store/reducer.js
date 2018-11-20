import * as actionTypes from "./actions";

const initState = {
    addingIncome: false,
    addingExpense: false,
    userInfo: {
        currentUser: "",
        currentExpense: 0,
        currentIncome: 0,
        currentUserId: "",
        currentHoldings: 0
    }
};

const mainReducer = (state = initState, action) => {

    switch(action.type){
        case actionTypes.addingExpense:
                return {
                    ...state, addingExpense: true
                }
        case actionTypes.addingIncome:
                return {
                    ...state, addingIncome: true
                };
        case actionTypes.cancelAddition:
                return {
                    ...state, addingIncome: false, addingExpense: false
                }
        default: return state;
    }

}

export default mainReducer;
