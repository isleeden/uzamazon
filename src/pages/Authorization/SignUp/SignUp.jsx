import {useForm} from "react-hook-form";
import banner from '../../../assets/img/signup_banner1.png'
import logo from '../../../assets/logo.png'
import {Link, useHistory} from 'react-router-dom'
import classes from './SignUp.module.scss'
import {registerAcc} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";

const SignUp = () => {
    const dispatch = useDispatch()
    const {register, formState: {errors}, handleSubmit} = useForm();
    let history = useHistory()
    const onSubmit = data => {
        dispatch(registerAcc(data)).then((res) => {
            if (res.status) {
                console.log(res.response.data)
                history.push("/signupconfirm")
            }
        }, (res)=>{
            console.log(res.response.data)
        })
    }
    return (
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
                            <label>
                                <h3>Имя:</h3>
                                <input className={errors.first_name && classes.error}
                                       {...register("first_name", {required: true})} />
                            </label>
                            <label>
                                <h3>Фамилия:</h3>
                                <input className={errors.last_name && classes.error}
                                       {...register("last_name", {required: true})} />
                            </label>
                            <label>
                                <h3>Дата рождения:</h3>
                                <input className={errors.dob && classes.error}
                                       type='date' {...register("dob", {required: true})} />
                            </label>
                            <label>
                                <h3>Номер телефона:</h3>
                                <input className={errors.username && classes.error}
                                       {...register("username", {required: true})} />
                            </label>
                            <label>
                                <h3>Пол:</h3>
                                <select {...register("gender", {required: true})} >
                                    <option value="man">Мужской</option>
                                    <option value="woman">Женский</option>
                                    <option value="other">Другой</option>
                                </select>
                            </label>
                            <label>
                                <div className={classes.password}>
                                    <h3>Пароль:</h3><p>Как минимум 8 символов</p>
                                </div>
                                <input className={errors.password1 && classes.error}
                                       {...register("password1", {required: true})} type='password'/>
                            </label>
                            <label>
                                <h3>Повторите пароль:</h3>
                                <input className={errors.password2 && classes.error}
                                       {...register("password2", {required: true})} type='password'/>
                            </label>
                            <label className={classes.check} htmlFor="checkData">
                                <input {...register("checkData")} name='checkData' type="checkbox"
                                       value="Yes"/>
                                <p>Я согласен(на) на обработку своих данных в целях улучшения качества сервиса</p>
                            </label>
                            <button type='submit'>Отправить код подтверждения</button>
                            <div className={classes.signup}>
                                <Link to='/login'>
                                    <p>Уже есть аккаунт? Войдите</p>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
