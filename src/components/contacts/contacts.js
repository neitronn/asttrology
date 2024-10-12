import './contacts.css';
import LoaderBlock from '../loaderBlock';
import ErrorBlock from '../errorBlock';
import Button from '../button';

const Contacts = (props) => {
    if (props['contact'] === null){
        return <LoaderBlock />
    }

    if (props['contact'] === false){
        return <ErrorBlock />
    }

    return (
        <Button link={props['contact']['link']} name={props['contact']['name']} class_name='contacts' />
    )
}
export default Contacts;