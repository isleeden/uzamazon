import {useEffect} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
import {setToken} from "./redux/profileReducer";
import Main from './pages/Main/Main';
import Category from "./pages/Category/Category";
import Search404 from "./pages/Search/Search404";
import Search from "./pages/Search/Search";
import Product from "./pages/Product/Product";
import CategoryList from './pages/Category/CategoryList';
import Cart from "./pages/Cart/Cart";
import React, {Suspense} from 'react';
import Purchase from "./pages/Purchase/Purchase";
import ResetPassword from "./pages/Authorization/ResetPassword/ResetPassword";
import ResetPasswordCode from "./pages/Authorization/ResetPasswordCode/ResetPasswordCode";
import NewPassword from "./pages/Authorization/NewPassword/NewPassword";

const Login = React.lazy(() => import('./pages/Authorization/Login/Login'));
const SignUp = React.lazy(() => import('./pages/Authorization/SignUp/SignUp'));
const SignUpConfirm = React.lazy(() => import('./pages/Authorization/SignUpConfirm/SignUpConfirm'));
const Profile = React.lazy(() => import('./pages/Profile/Profile'));

function App() {
    const dispatch = useDispatch()
    const initialized = useSelector(state => state.app.initialized)
    useEffect(() => {
        dispatch(initializeApp())
        dispatch(setToken(localStorage.getItem('Token')))
    }, [])
    if (!initialized) {
        return <Preloader/>
    }
    return (
        <Router>
            <Suspense fallback={<Preloader/>}>
                <Switch>
                    <Route exact path="/categories"><CategoryList/></Route>
                    <Redirect exact from="/category" to='/'/>
                    {/* <Redirect from="/category" to='/categories'/> */}
                    <Route exact path="/category/:categoryName"><Category/></Route>
                    <Route exact path="/product/:name?"><Product/></Route>
                    <Route exact path="/best"><Category/></Route>
                    <Route exact path="/"><Main/></Route>
                    <Route exact path="/login"><Login/></Route>
                    <Route exact path="/signup"><SignUp/></Route>
                    <Route exact path="/signupconfirm"><SignUpConfirm/></Route>
                    <Route exact path="/profile"><Profile/></Route>
                    <Route exact path="/resetpassword"><ResetPassword/></Route>
                    <Route exact path="/resetpasswordcode"><ResetPasswordCode/></Route>
                    <Route exact path="/newpassword"><NewPassword/></Route>
                    <Route exact path="/search"><Search/></Route>
                    <Route exact path="/purchase"><Purchase/></Route>
                    <Route exact path="/cart"><Cart/></Route>
                    <Route exact path="*"><Search404/></Route>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
