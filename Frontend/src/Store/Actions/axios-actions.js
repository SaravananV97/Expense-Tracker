import axios from "axios";
import * as actionCreators from "./actionsCreators";
//https://alligator.io/redux/redux-thunk/
export const getUserInfoAsync = (user_id) => {
    console.log(user_id);
    return (dispatch) => {
        axios.get(`/api/users/userdetails/${user_id}`).then((res) => {
            dispatch(actionCreators.getUserInfoSuccess(res.data));
        })
        .catch((err) => {
            dispatch(actionCreators.getUserInfoFailure(err.data));
        })
    }
}