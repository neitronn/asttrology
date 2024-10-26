import './headline.css'

const Headline = ({title, description}) => {
    return (
        <div className='headline'>
            <h2>{title}</h2>
            <span></span>
            <p>{description}</p>
        </div>
    )
}

export default Headline