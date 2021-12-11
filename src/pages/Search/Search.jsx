import './Search.scss';
import { useState } from 'react';
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import Checkbox from '../../components/Checkbox/Checkbox';
import Grid from '../../components/Grid/Grid';
import RatingStars from '../../components/RatingStars/RatingStars';
import Carousel from '../../components/Carousel/Carousel';
import nikePreview from '../../assets/img/nike_preview.png';
import { useLocation } from "react-router-dom";
import { getSearchProduct } from "../../redux/productReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Preloader from "../../components/Preloader/Preloader";
import Select from "../../components/Select/Select";
import Button from '../../components/Button/Button';
import { getMonthlyBest } from '../../redux/monthlyBestReducer';

const Search = () => {
    const dispatch = useDispatch()
    const [checked, setChecked] = useState(false);
    let product = useSelector(state => state.productPage.searchProduct)
    let searchText = useSelector(state => state.productPage.searchText);
    const monthlyBest = useSelector(state => state.monthlyBestPage.monthlyBest);
    let location = useLocation();

    const params = new URLSearchParams(location.search);


    const handleCheckboxChange = () => {
        setChecked(!checked);
    }
    useEffect(() => {
        dispatch(getSearchProduct(location.search));
        dispatch(getMonthlyBest());
    }, [location.search])
    if (!product) {
        return <Preloader />
    }
    return (
        <>
            <Header />
            <main className='container'>
                {product.manufacturers &&
                    <div className='bold-48px color-dark-blue mt-70px'>
                        Результаты поиска по запросу "{searchText ? searchText : params.get('search')}"
                </div>
                }

                {product && product.manufacturers.map(t =>
                    <div className='search-result-categories mt-45px mb-90px'>
                        <div className='search-result-categories-card'>
                            <div className='search-result-categories-preview'
                                style={{ backgroundImage: `url(${nikePreview})` }} />
                            <h3 className='roman-36px color-dark-blue'>{t.title}</h3>
                        </div>
                    </div>
                )}


                <div className='bold-48px color-dark-blue mt-70px'>
                    Товары по запросу "{searchText ? searchText : params.get('search')}"
                </div>
                <div className='category-header'>
                    <div className='category-header-actions'>
                        <span>Показано 1-12 результатов из 1000</span>
                        <div className='d-flex flex-items-center'>
                            Сортировать:
                            <Select value='cheap' className='ml-20px' />
                        </div>
                    </div>
                </div>

                <div className='category-body mb-160px'>
                    <div className='mr-20px shadow categories-sort-wrapper'>
                        <div className='categories-sort'>
                            <h3>Оценка</h3>
                            <ul className='p-0'>
                                <li className='starts'><RatingStars activeStarts={4} className='mr-10px' /> И выше</li>
                                <li className='starts'><RatingStars activeStarts={3} className='mr-10px' /> И выше</li>
                                <li className='starts'><RatingStars activeStarts={2} className='mr-10px' /> И выше</li>
                                <li className='starts'><RatingStars activeStarts={1} className='mr-10px' /> И выше</li>
                            </ul>
                        </div>
                        <div className='categories-sort'>
                            <h3>Цена</h3>
                            <div style={{ display: 'flex', justifyContent: 'center' }} className='mb-10px'>
                                <input placeholder="$ Минимум" type="text" style={{ width: '100%', height: '26px', fontSize: '12px', color: '#4F4F4F', padding: '0px 10px', marginRight: '10px', border: '1px solid #828282', borderRadius: '2px' }} />
                                <input placeholder="$ Максимум" type="text" style={{ width: '100%', height: '26px', fontSize: '12px', color: '#4F4F4F', padding: '0px 10px', border: '1px solid #828282', borderRadius: '2px' }} />
                            </div>
                            <div style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
                                <Button text="Применить" color='pink' style={{ height: '30px', width: '110px', fontSize: '14px' }} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Grid items={product ? product.products : null} />
                    </div>
                </div>
                <div className='bold-24px mb-25px color-dark-blue'>
                    Товары, которые также могут вам понравится:
                </div>
                <Carousel items={monthlyBest ? monthlyBest.products : null} centered />
            </main>
            <Footer />
        </>
    )
}

export default Search;
