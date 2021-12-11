import classes from './Search404.module.scss'
import page404 from '../../assets/img/404.png'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";

const Search404 = () => {
    return (
        <div className={classes.search404}>
            <Header/>
            <div className={classes.content404}>
                <div className="container">
                    <h2>Результаты поиска по запросу “Nike”</h2>
                    <p>Упс... Мы ничего не нашли</p>
                    <img src={page404} alt="404"/>
                    <p className={classes.like}>Товары, которые также могут вам понравиться:</p>
                    <Carousel/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Search404
