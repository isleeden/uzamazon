import './Grid.scss';
import Card from "../Card/Card";

const Grid = ({ items, className }) => {
    return (
        <>
            <div className='grid'>
                {items && items.map((card, key) => (
                    <Card
                        key={`${key}_${card && card.slug}`}
                        image={card.image}
                        price={card.price}
                        title={card.title}
                        activeStars={card.rate}
                        linkTo={`/product/${card.slug}`}
                    />
                ))}
            </div>
        </>

    )
}


export default Grid;
