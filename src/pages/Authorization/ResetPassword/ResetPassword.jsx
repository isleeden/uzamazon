import classes from './ResetPassword.module.scss'
import {useForm} from "react-hook-form";
import banner from '../../../assets/img/resetPassword.png'
import logo from '../../../assets/logo.png'
import {Link, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {getLogin} from "../../../redux/profileReducer";


const ResetPassword = () => {
    const dispatch = useDispatch()
    const {register, formState: {errors}, handleSubmit} = useForm();
    let token = useSelector(state => state.profilePage.token)
    let onSubmit = (data) => {

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
                            <h3>Введите номер телефона для смены пароля:</h3>
                            <input className={errors.username && classes.error}
                                   {...register("username", {required: true})} />
                            <button type='submit'>Сменить пароль</button>
                            <div className={classes.signup}>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword
