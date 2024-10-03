import './topPanel.css';
import Logo from '../logo/';
import TopMenu from '../topMenu';
import Contacts from '../contacts/';

const TopPanel = (props) => {
    return (
        <div className='top-panel'>
            <Logo />
            <div className='top-menu-wrap'>
                <TopMenu menu={props['menu']} />
            </div>
            <div className='contact-block'>
                <Contacts contact={props['contact']} />
            </div>
            
        </div>
    )
}

export default TopPanel;