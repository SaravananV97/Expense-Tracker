const redux = require("redux");

const createStore = redux.createStore;
let initState = {state: "Lasagna", count: 0};
const rootReducer = (state = initState, action) => {
    
    if(action.type === "ADD_WORD")
        return {...state, state: action.value};
    else if(action.type === "INC_COUNTER")
        return {...state, count: state.count  + 1}
    else return state;
}

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({type:"ADD_WORD", value: "Cheese Lasagna"});
store.dispatch({type: "INC_COUNTER"});


