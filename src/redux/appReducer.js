//Объявление констант Action type чтобы не ошибатся
import {getLogin} from "./profileReducer";

const INITIALIZED = 'reactNetwork/app/INITIALIZED'


//Начальный State
let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//Экспорт Action Creator в нем должен быть минимум type
export const setInitialize = () => ({type: INITIALIZED})

//Thunk
export const initializeApp = () => async (dispatch) => {
    //ИНИЦИАЛИЗАЦИЯ ПРИЛОЖЕНИЯ С ПОМОЩЬЮ ОЖИДАНИЯ ВСЕХ ПРОМИСОВ
    // let promise = dispatch(getLogin())
    // await Promise.all([promise])
    dispatch(setInitialize())
}

//Экспортируем Reducer. Он идет в Redux-Store
export default appReducer