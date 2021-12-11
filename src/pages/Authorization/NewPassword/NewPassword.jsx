import classes from './NewPassword.module.scss'
import {useForm} from "react-hook-form";
import banner from '../../../assets/img/newpassword.png'
import logo from '../../../assets/logo.png'
import {Link, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../../../redux/profileReducer";


const NewPassword = () => {
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
                        <h2>Пароль</h2>
                        <Link to='/'>
                            <img src={logo} alt="Logo"/>
                        </Link>
                    </div>

                    <div className={classes.loginForm}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3>Введите новый пароль:</h3>
                            <input className={errors.username && classes.error}
                                   {...register("username", {required: true})} />
                            <h3>Введите новый пароль еще раз:</h3>
                            <input className={errors.password && classes.error}
                                   {...register("password", {required: true})} type='password'/>
                            <button type='submit'>Сохранить и войти</button>
                            <div className={classes.signup}>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword
