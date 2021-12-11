//Импортируем все Reducers
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profileReducer";
import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import monthlyBestReducer from "./monthlyBestReducer";

//Соединяем все Reducers
let reducers = combineReducers({
    app: appReducer,
    monthlyBestPage: monthlyBestReducer,
    categoryPage: categoryReducer,
    profilePage: profileReducer,
    productPage: productReducer,
})

//Middleware + расширение Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
))

//Передаем Store в Provider который в index.js
export default store

