import * as actionTypes from "../Actions/actionTypes";
import * as asyncAction from "../Actions/axios-actions";
const initState = {
    addingIncome: false,
    addingExpense: false,
    userInfo: {
        currentUser: "",
        currentExpense: 0,
        currentIncome: 0,
        currentUserId: "",
        currentHoldings: 0,
        is_Authenticated: false
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
                 return {...state, addingIncome: false, addingExpense: false};
        case actionTypes.setDetails:
                action.data = action.data.data;
                return {
                    ...state, userInfo: {
                        currentUser: action.data.name,
                        currentExpense: action.data.totalExpenses,
                        currentUserId: action.data._id,
                        currentHoldings: action.data.currentHoldings,
                        currentIncome: action.data.currentHoldings + action.data.totalExpenses
                    }
                }

        case actionTypes.getUserInfoSuccess:
               const user = action.payload;
               console.log(user);
               return {...state, userInfo:{...state.userInfo, currentHoldings: user.currentHoldings, currentExpense: user.totalExpenses}};
        
        case actionTypes.toggleIsAuthenticated:
                const is_authed = action.payload;
                return {...state, is_Authenticated: is_authed}
        case actionTypes.loggingOut:
                return {...initState}        
        default: return state;
    }
}

export default mainReducer;
