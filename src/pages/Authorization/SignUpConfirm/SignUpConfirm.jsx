import classes from './SignUpConfirm.module.scss'
import {useForm} from "react-hook-form";
import banner from '../../../assets/img/signup_banner2.png'
import logo from '../../../assets/logo.png'
import {Link, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {tokenAcc} from "../../../redux/profileReducer";

const SignUpConfirm = () => {
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm();
    let token = useSelector(state => state.profilePage.token)
    const onSubmit = data => {
        dispatch(tokenAcc(data)).then(() => {
            // history.push('/')
        })
    }
    return (
        token ? <Redirect exact to='/'/> :
        <div className={classes.loginPage}>
            <div className={classes.bannerWrapper}>
                <div className={classes.banner} style={{backgroundImage: `url(${banner})`}}/>
            </div>
            <div className={classes.loginWrapper}>
                <div className={classes.loginContainer}>
                    <div className={classes.title}>
                        <h2>Регистрация</h2>
                        <Link to='/'>
                            <img src={logo} alt="Logo"/>
                        </Link>
                    </div>
                    <div className={classes.loginForm}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3>Введите 5-значный код подтверждения:</h3>
                            <input className={errors.username && classes.error} {...register("code")} />
                            <button type='submit'>Регистрация</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpConfirm
