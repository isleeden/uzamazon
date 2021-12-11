import { Avatar, Button, Modal } from 'antd';
import classes from './Purchase.module.scss'
import Header from "../../components/Header/Header"
import Footer from '../../components/Footer/Footer'
import { useSelector } from "react-redux";
import Radio from '../../components/Radio/Radio';

const Purchase = () => {

    const profile = useSelector(state => state.profilePage)

    return (
        <>
            <Header />
            <div className='d-flex flex-row mt-70px container'>
                <div className='d-flex flex-column mr-75px'>
                    <h1>
                        Личные данные
                    </h1>
                    <form className='d-flex flex-row mt-30px'>
                        <div className='d-flex flex-column mr-90px'>
                            <div className='d-flex flex-justify-center w-100'>
                                <Avatar size={{ xs: 40, sm: 50, md: 60, lg: 85, xl: 172, xxl: 172 }}
                                    src={profile.profile && profile.profile.avatar} />
                            </div>

                            <div className={classes.inputGroup}>
                                <label>
                                    Имя:
                                </label>
                                <input />
                            </div>
                            <div className={classes.inputGroup}>
                                <label>
                                    Номер телефона:
                                </label>
                                <input />
                            </div>
                            <button type='submit'>Изменить данные</button>

                        </div>
                        <div>
                            <div className={`${classes.inputGroup} ${classes.required} ${classes.mt0}`}>
                                <label>
                                    Город:
                                </label>
                                <input />
                            </div>
                            <div className={`${classes.inputGroup} ${classes.required}`}>
                                <label>
                                    Район:
                                </label>
                                <input />
                            </div>
                            <div className={`${classes.inputGroup} ${classes.required}`}>
                                <label>
                                    Улица / Массив:
                                </label>
                                <input />
                            </div>
                            <div className={`${classes.inputGroup} ${classes.required}`}>
                                <label>
                                    Номер дома:
                                </label>
                                <input required />
                            </div>
                            <div className={classes.inputGroup}>
                                <label>
                                    Номер квартиры:
                                </label>
                                <input />
                            </div>
                        </div>
                    </form>
                </div>
                <div className={`d-flex flex-column ${classes.paymentMethodWrapper}`}>
                    <h1>
                        Метод оплаты:
                    </h1>
                    <div className={classes.paymentMethod}>
                        <Radio></Radio>
                        <div className={classes.textareaGroup}>
                            <label className='roman-18px color-dark-blue'>Комментарий к заказу:</label>
                            <textarea name="orederComments" />
                        </div>
                        <div className={classes.totalAmount}>
                            Сумма к оплате:<span>$340.99</span>
                        </div>
                        <button type='submit'>Оплатить</button>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Purchase
