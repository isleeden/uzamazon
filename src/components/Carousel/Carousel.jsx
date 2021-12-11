import './Carousel.scss';

import Slider from "react-slick";
import Card from "../Card/Card";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";


const Carousel = ({ items, centered, autoPlay, className, request }) => {

    // change react-slick to smth else, as it is written on JQuery

    const settings = {
        className: className ? className : '',
        centerMode: centered ? centered : false,
        infinite: true,
        centerPadding: "90px",
        swipeToSlide: true,
        speed: 750,
        easing: 'ease',
        variableWidth: true,
        nextArrow: <ArrowRight centeredCarousel={centered} />,
        prevArrow: <ArrowLeft centeredCarousel={centered} />,

        /* Autoplay */

        autoplay: autoPlay ? autoPlay : false,
        autoplaySpeed: 3500,
        pauseOnHover: true
    }


    return (
        <Slider {...settings}>
            {
                items ? items.map((card, key) => (
                    <Card
                        key={`${key}_${card.slug}`}
                        className='my-10px mx-10px'
                        sm
                        image={card.image}
                        price={card.price}
                        title={card.title}
                        activeStars={card.rate}
                        linkTo={`/product/${card.slug}`}

                    />
                )) : [1, 2, 3, 4, 5, 6, 7].map((c, key) => (
                    <Card key={key} className='my-10px mx-10px' sm />
                ))
            }
        </Slider>
    )
}

export default Carousel;
