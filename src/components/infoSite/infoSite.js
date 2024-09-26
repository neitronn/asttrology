import './infoSite.css';
import LoaderBlock from '../loaderBlock';

const InfoSite = (props) => {
    let content_address = <LoaderBlock />;
    let content_phone = <LoaderBlock />;
    if (props['info']){
        const {address, phone} = props['info'];
        content_address = <div className='info_site_item'><i className="icon-home3"></i>{address}</div>;
        content_phone = <div className='info_site_item'><i className="icon-phone"></i>{phone}</div>;
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