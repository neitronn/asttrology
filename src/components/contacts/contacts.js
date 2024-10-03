import './contacts.css';
import LoaderBlock from '../loaderBlock';
import ErrorBlock from '../errorBlock';

const Contacts = (props) => {
    if (props['contact'] === null){
        return <LoaderBlock />
    }

    if (props['contact'] === false){
        return <ErrorBlock />
    }

    return (
        <a href={props['contact']['link']} className='contacts'>
            {props['contact']['name']}
        </a>
    )
}
export default Contacts;