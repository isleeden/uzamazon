import classes from './RatingBlock.module.scss'
import RatingStars from "../RatingStars/RatingStars";
import {Progress} from "antd";
import {HashLink} from "react-router-hash-link";
import {useDispatch, useSelector} from "react-redux";
import {getReviewDetail} from "../../redux/productReducer";
import {useEffect} from "react";
import Preloader from "../Preloader/Preloader";

const RatingBlock = ({slug}) => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.profilePage.token)
    const rating = useSelector(state => state.productPage.reviewDetail)

    useEffect(() => {
        dispatch(getReviewDetail(slug))
    }, [slug]);
    if (!rating) {
        return <Preloader/>
    }
    return (
        <div className={classes.rating}>
            <h4>Оценка</h4>
            <div className={classes.stars}>
                <RatingStars disabled={true} activeStarts={rating.rate}/> <p>{rating.rate} из 5</p>
            </div>
            <p className={classes.reviews}>{rating.count} отзывов</p>
            <div className={classes.ratingBar}>
                <p>1 звезда</p> <Progress status='normal' percent={rating.star_1}/>
            </div>
            <div className={classes.ratingBar}>
                <p>2 звезды</p> <Progress status='normal' percent={rating.star_2}/>
            </div>
            <div className={classes.ratingBar}>
                <p>3 звезды</p> <Progress status='normal' percent={rating.star_3}/>
            </div>
            <div className={classes.ratingBar}>
                <p>4 звезды</p> <Progress status='normal' percent={rating.star_4}/>
            </div>
            <div className={classes.ratingBar}>
                <p>5 звезд</p> <Progress status='normal' percent={rating.star_5}/>
            </div>
            <HashLink smooth to={!login ? '/login' : '#feedback'}>
                <button className={classes.pinkButton}>Оставить отзыв</button>
            </HashLink>
        </div>
    )
}

export default RatingBlock