import './infoSite.css';
import LoaderBlock from '../loaderBlock';
import ErrorBlock from '../errorBlock';

const InfoSite = (props) => {
    let content_address = '';
    let content_phone = '';

    if (props['info'] === null){
        content_address = <LoaderBlock />;
        content_phone = <LoaderBlock />;
    }

    if (props['info'] === false){
        content_address = <ErrorBlock />;
        content_phone = <ErrorBlock />;
    }

    if (props['info']){
        const {address, phone} = props['info'];
        content_address = address ? <div className='info_site_item'><i className="icon-home3"></i>{address}</div> : <ErrorBlock />;
        content_phone = phone ? <div className='info_site_item'><i className="icon-phone"></i>{phone}</div> : <ErrorBlock />;
    }
    

    return (
        <div className='info_site'>
            <div className='address'>
                {content_address}
            </div>
            <div className='phone'>
                {content_phone}
            </div>
        </div>
    )
}

export default InfoSite;