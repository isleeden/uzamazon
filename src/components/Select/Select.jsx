import { useState } from 'react';
import { Select as AntSelect } from 'antd';
import './Select.scss';
import Button from "../Button/Button";

const Select = ({ list, value, handleChange, className }) => {
    const { Option } = AntSelect;

    return (

        <AntSelect
            labelInValue
            defaultValue={{ value: value ? value : 'cheap' }}
            onChange={handleChange}
            className={className}
        >
            <Option value='cheap'>
                Цена: низкая-высокая
            </Option>
            <Option value='expensive'>
                Цена: высокая-низкая
            </Option>

        </AntSelect>

        // <div className={`select-wrapper ${className}`}>
        //     <AntDropdown overlay={menu} trigger={['click']}>

        //         <button className='select-header'>
        //             <div className='select-header-title'>
        //                 Цена: низкая-высокая
        //             </div>
        //             <div className='select-header-arrow'>
        //                 <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path d="M12.1667 1.37484L6.49999 7.0415L0.833324 1.37484" stroke="#4F4F4F"
        //                           strokeLinecap="round" strokeLinejoin="round"/>
        //                 </svg>
        //             </div>
        //         </button>
        //     </AntDropdown>
        //     {/*<div className='select-list'>*/}
        //     {/*    <button className="select-list-item"/>*/}
        //     {/*    <button className="select-list-item"/>*/}
        //     {/*    <button className="select-list-item"/>*/}
        //     {/*</div>*/}
        // </div>
    )
}


export default Select;
