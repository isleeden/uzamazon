//Action Type
import { monthlyBestAPI } from "../api/api";

const SET_MONTHLY_BEST = 'uzamazon/monthlyBestReducer/SET_MONTHLY_BEST';

let initialState = {
    monthlyBest: '',
}

const monthlyBestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MONTHLY_BEST:
            return {
                ...state,
                monthlyBest: action.monthlyBest
            }
        default:
            return state
    }
}

//Action Creators
let setMonthlyBest = (monthlyBest) => ({ type: SET_MONTHLY_BEST, monthlyBest })

//Thunk
export let getMonthlyBest = () => async (dispatch) => {
    let data = await monthlyBestAPI.getMonthlyBest();
    dispatch(setMonthlyBest(data));
}

export default monthlyBestReducer;
