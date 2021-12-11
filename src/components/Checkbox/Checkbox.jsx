import './Checkbox.scss';
import { useState } from 'react';


const Checkbox = ({ name, label, checked = false, onChange, className }) => {

    return (
        <div className='checkbox-group'>
            <input name={name} checked={checked} onChange={onChange} onClick={onChange} type="checkbox" className={`${className ? className : ''}`} />
            <label>{label}</label>
        </div>
    )
}

export default Checkbox;
