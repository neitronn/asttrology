import './fatalError.css';
import img from './fatal_error.jpg'

const FatalError = () => {
    return (
        <div className='fatal_error'>
           <img src={img} alt="Ошибка"></img>
        </div>
    )
}

export default FatalError;