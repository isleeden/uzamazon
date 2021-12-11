import './RatingStarts.scss';
import { Rate } from 'antd';
import Star from "./Star";

const RatingStars = ({changeStar, activeStarts, className, allowHalf, disabled }) => {
    return (
        <>
            <Rate onChange={(data)=>{changeStar(data)}} className={className} allowHalf={true} disabled={disabled} defaultValue={activeStarts ? activeStarts : 0} character={<Star />} />
        </>
    );
}

export default RatingStars;
