import classes from './Comment.module.scss'
import avatarPhoto from "../../assets/img/avatar.png";
import RatingStars from "../RatingStars/RatingStars";
import {Avatar} from "antd";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createReview, getProductDetail, getReviewDetail, getReviewList} from "../../redux/productReducer";
import {useState} from "react";
import { message } from 'antd';

const Comment = ({slug}) => {
    const dispatch = useDispatch()
    const {register, handleSubmit, reset} = useForm();
    const [stars, setStars] = useState();
    const [comment, setComment] = useState();
    let changeStar = (data) => {
        setStars(data)
    }
    const onSubmit = (comment, e) => {
        let request = {
            ...comment,
            stars
        }
        dispatch(createReview(slug, request)).then((res)=>{
            reset()
            message.success('Отзыв отправлен')
            dispatch(getReviewList(slug))
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        })
    }
    return (
        <div id='feedback' className={classes.feedback}>
            <div className={classes.avatar}>
                <Avatar size={{xs: 65, xxl: 115}} src={avatarPhoto}/>
            </div>
            <div className={classes.feedbackContainer}>
                <h4>Оставьте свой отзыв:</h4>
                <div className={classes.rating}>
                    <p>Ваша оценка:</p><RatingStars changeStar={changeStar} />
                </div>
                <form onSubmit={ handleSubmit(onSubmit)}>
                    <textarea placeholder='Ваш отзыв:' {...register("comment")} />
                    <button type='submit'>Опубликовать</button>
                </form>
            </div>
        </div>
    )
}

export default Comment