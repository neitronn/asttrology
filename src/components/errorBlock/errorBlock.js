import './errorBlock.css';
import img from './error.png';

const ErrorBlock = () => {
    return (
        <div className='error-block'>
            <img src={img} alt='error' />
        </div>
    )
}

export default ErrorBlock;