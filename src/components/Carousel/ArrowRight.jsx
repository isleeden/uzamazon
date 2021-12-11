const ArrowRight = ({onClick, className, centeredCarousel}) => {
    return (
        <button className={`direction right ${className} ${!centeredCarousel ? 'nc' : ''}`} onClick={onClick}>
            <svg width="12" height="21" viewBox="0 0 12 21" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.532195 17.7818L7.60332 10.4902L0.532195 3.19858C0.363469 3.02459 0.229628 2.81804 0.138314 2.59071C0.047 2.36339 3.55565e-09 2.11974 0 1.87369C-3.55564e-09 1.62763 0.047 1.38398 0.138314 1.15666C0.229628 0.929331 0.363469 0.722777 0.532195 0.548789C0.700922 0.374802 0.901229 0.236787 1.12168 0.142625C1.34213 0.0484638 1.57841 -3.66652e-09 1.81703 0C2.05564 3.66652e-09 2.29192 0.0484638 2.51237 0.142625C2.73282 0.236787 2.93313 0.374802 3.10186 0.548789L11.4669 9.17471C12.1777 9.90763 12.1777 11.0916 11.4669 11.8245L3.10186 20.4504C2.93326 20.6246 2.73299 20.7628 2.51252 20.8572C2.29205 20.9515 2.05571 21 1.81703 21C1.57834 21 1.342 20.9515 1.12153 20.8572C0.901065 20.7628 0.700797 20.6246 0.532195 20.4504C-0.160338 19.7175 -0.178563 18.5148 0.532195 17.7818Z"/>
            </svg>
        </button>
    )
}

export default ArrowRight;
