import classes from './Login.module.scss'
import {useForm} from "react-hook-form";
import banner from '../../../assets/img/authorization_banner.png'
import logo from '../../../assets/logo.png'
import {Link, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../../../redux/profileReducer";


const Login = () => {
    const dispatch = useDispatch()
    const {register, formState: {errors}, handleSubmit} = useForm();
    let token = useSelector(state => state.profilePage.token)
    let onSubmit = (data) => {
        dispatch(getLogin(data))
    }
    if (token) {
        return <Redirect to='/'/>
    }
    return (
        <div className={classes.loginPage}>
            <div className={classes.bannerWrapper}>
                <div className={classes.banner} style={{backgroundImage: `url(${banner})`}}/>
            </div>
            <div className={classes.loginWrapper}>
                <div className={classes.loginContainer}>
                    <div className={classes.title}>
                        <h2>Вход</h2>
                        <Link to='/'>
                            <img src={logo} alt="Logo"/>
                        </Link>
                    </div>

                    <div className={classes.loginForm}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3>Номер телефона:</h3>
                            <input className={errors.username && classes.error}
                                   {...register("username", {required: true})} />
                            <div className={classes.password}>
                                <h3>Пароль:</h3><Link to='/resetpassword'><p>Забыли пароль?</p></Link>
                            </div>
                            <input className={errors.password && classes.error}
                                   {...register("password", {required: true})} type='password'/>
                            <button type='submit'>Войти</button>
                            <div className={classes.signup}>
                                <Link to='/signup'>
                                    <p>Еще нет аккаунта? Зарегестрируйтесь</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
