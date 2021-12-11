import classes from './Product.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Avatar, message} from 'antd';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {getCategory, getCategoryList} from "../../redux/categoryReducer";
import {
    addProductsCart,
    getCartLength,
    getProductDetail,
    getProductsCart,
    getReviewDetail
} from "../../redux/productReducer";
import Preloader from "../../components/Preloader/Preloader";
import RatingStars from "../../components/RatingStars/RatingStars";
import Carousel from "../../components/Carousel/Carousel";
import banner from '../../assets/img/productBanner.png'
import avatarPhoto from '../../assets/img/avatar.png'
import CategoryList from '../Category/CategoryList';
import {useForm} from "react-hook-form";
import Review from "../../components/Review/Review";
import RatingBlock from "../../components/RatingBlock/RatingBlock";
import Comment from "../../components/Comment/Comment";

const Product = () => {
    const dispatch = useDispatch()
    let slug = useParams();
    let product = useSelector(state => state.productPage.productDetail)
    const [monthlyBest, setMonthlyBest] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const category = useSelector(state => state.categoryPage.category);
    const login = useSelector(state => state.profilePage.token)
    const rating = useSelector(state => state.productPage.reviewDetail)
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        dispatch(getCategoryList());
    }, []);

    useEffect(() => {
        dispatch(getProductDetail(slug.name))
        dispatch(getCategory('electronics'))
        dispatch(getReviewDetail(slug.name))
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }, [slug]);

    useEffect(() => {
        setMonthlyBest(category);
    }, [category])
    let addCart = () => {
        dispatch(addProductsCart(request)).then(() => {
            dispatch(getCartLength())
            message.success('Товар добавлен в корзину')
        })
    }
    let viewCart = () => {
        dispatch(getProductsCart())
    }
    if (!product) {
        return <Preloader/>
    }
    if (!rating) {
        return <Preloader/>
    }
    let request = {
        id: product.id,
        quantity: quantity
    }

    return (
        <div className={classes.productPage}>
            <Header/>
            <div className="container">
                <div className={classes.breadСrumbs}>
                    <p>{product.category.title}</p>/<p>{product.subcategory.title}</p>/
                    <p>{!product.product_type ? '' : product.product_type.title}</p>
                </div>
                <div className={classes.productTitle}>
                    <div className={classes.photo}>
                        <img src={product.image} alt="Product Image"/>
                    </div>
                    <div className={classes.title}>
                        <h2>{product.title}</h2>
                        <RatingStars disabled={true} activeStarts={rating.rate}/>
                        <div className={classes.manufacturer}>
                            <h4>Производитель:</h4>
                            <span>{!product.manufacturer ? '' : product.manufacturer.title}</span>
                        </div>
                        <div className={classes.price}>
                            <h2>${product.price}</h2>
                            <p>97% Rayon, 3% Spandex <br/>
                                Imported <br/>
                                Machine Wash <br/>
                                Supersoft French terry will make these casual jogger-style sweatpants a <br/> go-to for
                                everyday lounge-wear
                                Features an elasticized waistband with drawstring
                            </p>
                        </div>
                        <div className={classes.buy}>
                            <div className={classes.quantity}>
                                <h4>Количество:</h4>
                                <div className={classes.quantityTotal}>
                                    <button onClick={() => {
                                        if (quantity >= 2) {
                                            setQuantity(quantity - 1)
                                        }
                                    }}>-
                                    </button>
                                    <p>{quantity}</p>
                                    <button onClick={() => {
                                        setQuantity(quantity + 1)
                                    }}>+
                                    </button>
                                </div>
                            </div>
                            <div className={classes.buyPrice}>
                                <h4>Стоимость:</h4><span>${product.price * quantity}</span>
                            </div>
                        </div>
                        <div className={classes.buyButton}>
                            <button onClick={viewCart} className={classes.orangeButton}>Купить</button>
                            <button onClick={addCart} className={classes.pinkButton}>В корзину</button>
                        </div>
                    </div>
                </div>
                <div className={classes.carousel}>
                    <h4>Товары, которые также могут вам понравиться:</h4>
                    <Carousel items={monthlyBest ? monthlyBest.products : null} centered/>
                </div>
                <div className={classes.banner}>
                    <img src={banner} alt="Баннер"/>
                </div>
                <div className={classes.characteristics}>
                    <div className={classes.description}>
                        <h3>Характеристики товара:</h3>
                        <p>{product.characteristics}</p>
                        <br/>
                        <p>{product.description}</p>
                    </div>
                    <RatingBlock slug={slug.name}/>
                </div>
                <Review slug={slug.name}/>
                {login && <Comment slug={slug.name}/>}
                <div className={classes.category}>
                    <CategoryList/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Product
