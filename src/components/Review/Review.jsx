import classes from './Review.module.scss'
import RatingStars from "../RatingStars/RatingStars";
import Pagination from "../Pagination/Pagination";
import {Avatar} from "antd";
import {getReviewList} from "../../redux/productReducer";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";

const Review = ({slug}) => {
    const dispatch = useDispatch()
    const review = useSelector(state => state.productPage.reviewList)
    useEffect(() => {
        dispatch(getReviewList(slug))
    }, [slug]);
    if (!review) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.reviews}>
                <h4>Отзывы:</h4>
                {review ? review.map(r =>
                    <div className={classes.review}>
                        <div className={classes.avatar}>
                            <Avatar size={{xs: 65, xxl: 75}} src={r.avatar}/>
                        </div>
                        <div className={classes.reviewContainer}>
                            <div className={classes.title}>
                                <h5>{r.full_name}</h5>
                                <p>{r.created_at}</p>
                            </div>
                            <RatingStars disabled={true} activeStarts={r.stars}/>
                            <div className={classes.reviewText}>
                                <p>{r.comment}</p>
                            </div>
                        </div>
                    </div>
                ) : <h2>Отзывов нет =(</h2>}
            </div>
            <Pagination/>
        </div>
    )
}

export default Review