import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { getCategory } from '../../redux/categoryReducer';

import './Category.scss';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Grid from "../../components/Grid/Grid";
import Select from "../../components/Select/Select";
import Checkbox from "../../components/Checkbox/Checkbox";
import RatingStars from "../../components/RatingStars/RatingStars";
import Carousel from "../../components/Carousel/Carousel";

import leadingPreviewImage from "../../assets/img/cat_clothing_preview.jpg";
import bottomPreviewImage from "../../assets/img/cat_clothing_bottom_preview.jpg";
import { getMonthlyBest } from '../../redux/monthlyBestReducer';
import Button from '../../components/Button/Button';

import { Pagination } from 'antd';


const Category = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [pageSize, setPageSize] = useState(20);
    const [page, setPage] = useState(1);

    const [category, setCategory] = useState(null);
    const [checkboxesState, setCheckboxesState] = useState({});
    const [checkboxesManufacturerState, setCheckboxesManufacturerState] = useState({});
    const [search, setSearch] = useState(location.search);

    const [sortCostMin, setSortCostMin] = useState(null);
    const [sortCostMax, setSortCostMax] = useState(null);

    const params = new URLSearchParams(search);

    const { categoryName } = useParams();

    const categoryState = useSelector(state => state.categoryPage.category);
    const monthlyBestState = useSelector(state => state.monthlyBestPage.monthlyBest);

    // useEffect(() => {
    //     const sort_by = new URLSearchParams(search).get('sort_by');
    //     console.log('sort_by', sort_by)
    // }, [sortBy])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    useEffect(() => {
        setPage(1);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [categoryName]);

    useEffect(() => {
        location.pathname === '/best' ?
            dispatch(getMonthlyBest()) :
            dispatch(getCategory(`${categoryName.toLowerCase()}${search}${search ? '&' : '?'}page_size=${pageSize}&page=${page}`));
    }, [categoryName, search, page, pageSize]);

    useEffect(() => {
        if (categoryState && !(Array.isArray(categoryState.category) && categoryState.category.length)) {
            // history.push('');
        }
        location.pathname !== '/best' && setCategory(categoryState)
    }, [categoryState, search])

    useEffect(() => {
        location.pathname === '/best' && setCategory(monthlyBestState);
    }, [monthlyBestState])

    // useEffect(() => {
    //     if (categoryState && !(Array.isArray(categoryState.category) && categoryState.category.length)) {
    //         history.push('');
    //     }
    //     setCategory(categoryState);
    // }, [categoryState]);

    const handleSelectChange = (value) => {
        params.set('sort_by', value.value);
        history.push({
            pathname: location.pathname,
            search: params.toString()
        })
        setSearch(`?${params.toString()}`);
    }

    const handleCheckboxSubCategoryChange = (e, id) => {
        const name = e.target.name
        const isChecked = e.target.checked;
        setCheckboxesState({ ...checkboxesState, [id]: { name: name, isChecked: isChecked } })

        const data = params.toString().split('&');
        const result = {}
        data.forEach(string => {
            const [key, value] = string.split('=');
            result[key] = [{ ...value, value }];
        })

        if (checkboxesState[id] && checkboxesState[id].isChecked) {
            params.delete('product_type');
            history.replace({
                search: params.toString()
            })
            setCheckboxesState({ ...checkboxesState, [id]: { name: name, isChecked: false } })
        } else {
            params.set('product_type', id);
            history.push({
                pathname: location.pathname,
                search: params.toString()
            })
        }
        setSearch(`?${params.toString()}`)
        console.log(result);
    }

    const handleCheckboxManufacturerChange = (e, id) => {
        const name = e.target.name
        const isChecked = e.target.checked;
        setCheckboxesManufacturerState({ ...checkboxesManufacturerState, [id]: { name: name, isChecked: isChecked } })

        const data = params.toString().split('&');
        const result = {}
        data.forEach(string => {
            const [key, value] = string.split('=');
            result[key] = [{ ...value, value }];
        })

        if (checkboxesManufacturerState[id] && checkboxesManufacturerState[id].isChecked) {
            params.delete('product_type');
            history.replace({
                search: params.toString()
            })
            setCheckboxesManufacturerState({ ...checkboxesManufacturerState, [id]: { name: name, isChecked: isChecked } })
        } else {
            params.set('manufacturer', id);
            history.push({
                pathname: location.pathname,
                search: params.toString()
            })
        }
        setSearch(`?${params.toString()}`)
        console.log(result);
    }

    const handlePaginationChange = (page) => {
        window.scrollTo({ top: 310, left: 0, behavior: 'smooth' });
        setPage(page);
    }

    return (
        <>
            <Header />
            <section className='banner' style={{ backgroundImage: `url(${leadingPreviewImage})` }} />
            <main className='container'>
                <div className='category-header'>
                    <h1>︁{location.pathname === '/best' ? 'Лучшее за месяц' : category && category.category && category.category.title}</h1>
                    <div className='category-header-actions'>
                        <span>Показано 1-12 результатов из 1000</span>
                        {location.pathname !== '/best' &&
                            <div className='d-flex flex-items-center'>
                                Сортировать:
                            <Select value={params.get('sort_by') ? params.get('sort_by') : 'cheap'} handleChange={handleSelectChange} className='ml-20px' />
                            </div>
                        }
                    </div>
                </div>
                <div className='category-body'>
                    <div className='mr-20px shadow categories-sort-wrapper'>
                        {/* Ask to wrap all the filtering keys into one key to map through every key on the filtering parent key */}

                        {
                            category && category.subcategories && (
                                <div className='categories-sort'>
                                    <h3>Категории</h3>
                                    {
                                        category && category.subcategories.map((subCategory, key) => (
                                            !!subCategory.product_types.length &&
                                            <ul key={key}>
                                                {subCategory.title}
                                                {subCategory.product_types.map((productType, key) => (
                                                    <li key={key}>
                                                        <Checkbox
                                                            name={productType.title}
                                                            label={productType.title}
                                                            checked={checkboxesState[productType.id] && checkboxesState[productType.id].isChecked}
                                                            onChange={(e) => handleCheckboxSubCategoryChange(e, productType.id)} />
                                                    </li>
                                                ))}
                                            </ul>
                                        ))
                                    }
                                </div>
                            )
                        }
                        {
                            category && category.manufacturers && (
                                <div className='categories-sort'>
                                    <h3>Производители</h3>
                                    <ul className='p-0'>
                                        {
                                            category && category.manufacturers.map((manufacturer, key) => (
                                                <li key={key}>
                                                    <Checkbox
                                                        name={manufacturer.title}
                                                        label={manufacturer.title}
                                                        checked={checkboxesManufacturerState[manufacturer.id] && checkboxesManufacturerState[manufacturer.id].isChecked}
                                                        onChange={(e) => handleCheckboxManufacturerChange(e, manufacturer.id)} />
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            )
                        }

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
                                <input
                                    onChange={(e) => setSortCostMin(e.target.value)}
                                    placeholder="$ Минимум"
                                    type="text"
                                    style={{ width: '100%', height: '26px', fontSize: '12px', color: '#4F4F4F', padding: '0px 10px', marginRight: '10px', border: '1px solid #828282', borderRadius: '2px' }} />
                                <input
                                    onChange={(e) => setSortCostMax(e.target.value)}
                                    placeholder="$ Максимум"
                                    type="text"
                                    style={{ width: '100%', height: '26px', fontSize: '12px', color: '#4F4F4F', padding: '0px 10px', border: '1px solid #828282', borderRadius: '2px' }} />
                            </div>
                            <div style={{ display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
                                <Button text="Применить" color='pink' style={{ height: '30px', width: '110px', fontSize: '14px' }} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Grid items={category ? category.products : null} />
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '20px' }}>
                            <Pagination size="small" defaultCurrent={page} pageSize={20} total={category && category.count} onChange={handlePaginationChange} />
                        </div>
                    </div>
                </div>
                <section className='banner mt-90px' style={{ backgroundImage: `url(${bottomPreviewImage})` }} />
                <section className='d-flex flex-items-center flex-justify-between mt-50px carousel-section'>
                    <div className='bg-pink br-5px data-block' style={{ marginRight: '22px' }}>
                        <h1>
                            Товары по акции
                        </h1>
                        <span>
                            -30% <br /> только до 05.05.2021
                        </span>
                    </div>
                    <div className='d-flex w-100 carousel-wrapper'>
                        <Carousel className='w-100' items={category ? category.products : null} centered />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Category;
