import './Input.scss';

const Input = ({placeholder, height, className, children}) => {

    return (
        <div className={`input-container ${className ? className : ''}`}>
            <input placeholder={placeholder}/>
            {children}
        </div>
    )
}


export default Input;
