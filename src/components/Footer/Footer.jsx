import './Footer.scss';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='container footer-inner'>
                <div className='d-flex flex-justify-between flex-items-center'>
                    <div className='d-flex flex-items-center'>
                        <div className='header-brand'>
                            <img src={logo} alt='uzamazon' />
                        </div>
                    </div>
                </div>
                <nav className='d-flex flex-justify-between'>
                    <ul className='d-flex flex-row flex-justify-center'>
                        <li>
                            <Link to='/'>
                                Контакты
                            </Link>
                        </li>
                        <span className='vert-line' />
                        <li>
                            <Link to={{ pathname: 'https://t.me/uzAmazonDelivery' }} target="_blank" >
                                Telegram-канал
                            </Link>
                        </li>
                        <span className='vert-line' />
                        <li>Публичная оферта</li>
                    </ul>
                    <span>
                        +99890 123 45 67
                    </span>
                </nav>

            </div>
        </footer>
    )
}
export default Footer;
