import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, type, onClick, buttonStyle, buttonSize, link }) => {

    const SIZES = [ 'btn-medium', 'btn-large' ];
    const STYLES = [ 'btn-primary', 'btn-outline' ];

    const getButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const getButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    
    return (
        <Link to={link} className='btn-mobile'>
            <button className={`btn ${getButtonStyle} ${getButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button
