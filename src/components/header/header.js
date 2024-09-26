import './header.css';
import InfoSite from '../infoSite';
import Search from '../search/search';
import Basket from '../basket';
import UserBlock from '../userBlock/userBlock';

const Header = (props) => {
    return (
        <div className='header'>
            <InfoSite info={props['info']} />
            <div className="right_panel">
                <Search />
                <Basket />
                <UserBlock />
            </div>
        </div>
    )
}

export default Header;