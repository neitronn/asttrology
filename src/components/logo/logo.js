import './logo.css';
import img from './logo.webp';

const Logo = () => {
    return (
        <a href='/' className='logo'>
            <img src={img} alt='logo'></img>
        </a>
    )
}

export default Logo;