import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



const CategoryList = () => {
    const categoryListState = useSelector(state => state.categoryPage.categoryList);

    return (
        <div className='main-categories'>
            {categoryListState && categoryListState.slice(0, 5).map(category => (
                <Link to={`/category/${category.slug}`} className='shadow category-card' key={category.id}>
                    <div className='category-preview' style={{ backgroundImage: `url(${category.banner1})` }} />
                    <div className='category-card-body'>
                        <h2>{category.title}</h2>
                        <span>Более {category.id * 50 + 50} товаров</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default CategoryList;