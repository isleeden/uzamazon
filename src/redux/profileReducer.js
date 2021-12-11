//Action Type
import {accountAPI} from "../api/api";

const SET_TOKEN = 'uzamazon/centersReducer/SET_TOKEN'
const SET_PROFILE = 'uzamazon/centersReducer/SET_PROFILE'

let initialState = {
    token: '',
    id: '',
    username: '',
    first_name: '',
    last_name: '',
    email: '',

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case SET_PROFILE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//Action Creators
export let setToken = (token) => ({type: SET_TOKEN, token})
let setProfile = (data) => ({
    type: SET_PROFILE,
    payload: {...data}
})


//Thunk
export let getLogin = (userData) => async (dispatch) => {
    let data = await accountAPI.getLogin(userData)
    if (data.status === 200) {
        localStorage.setItem('Token', data.data.token);
        dispatch(setToken(data.data.token))
    }
    return data
}

export let getProfile = () => async (dispatch) => {
    let data = await accountAPI.getProfile()
    dispatch(setProfile(data))
}

export let registerAcc = (registerData) => async (dispatch) => {
    let data = await accountAPI.registerAcc(registerData)
    return data
}

export let tokenAcc = (code) => async (dispatch) => {
    let data = await accountAPI.tokenAcc(code)
    dispatch(setToken(data.token))
}

export let logOut = () => async (dispatch) => {
    dispatch(setToken(''))
}


export default profileReducer
