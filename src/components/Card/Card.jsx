import './Card.scss';
import { Link } from "react-router-dom";

import RatingStars from '../RatingStars/RatingStars';

const Card = ({ image, price, title, amount, activeStars, linkTo, className, sm }) => {
    return (
        <div className={`card ${className ? className : ''}`}>
            <Link to={linkTo ? linkTo : '/'} className='card-image'>
                <img src={image ? image : ''} />
            </Link>
            <div className={`card-body ${sm ? 'sm' : ''}`}>
                {price && <div className='card-price'>${price ? price : ''}</div>}
                <Link to={linkTo ? linkTo : '/'} className='card-title'>{title ? title : ''}</Link>
                <div className='card-amount'>{amount ? amount : '︁︁︁︁︁︁︁︁︁'}</div>
                <div className='card-rating'>
                    <RatingStars allowHalf disabled={true} activeStarts={activeStars} />
                </div>
            </div>
        </div>
    )
}

export default Card;
