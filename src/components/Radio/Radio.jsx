import './Radio.scss';

const Radio = ({ items, name }) => {
    return (
        <>
            <label className='radio-container'>
                Наличные
                <input type='radio' checked="checked" name={name ? name : 'radio'} />
                <span className='checkmark' />
            </label>
            <label className='radio-container'>
                PayMe
                <input type='radio' checked="checked" name={name ? name : 'radio'} />
                <span className='checkmark' />
            </label >
            <label className='radio-container'>
                Click
                <input type='radio' checked="checked" name={name ? name : 'radio'} />
                <span className='checkmark' />
            </label >
        </>
    )
}

export default Radio
