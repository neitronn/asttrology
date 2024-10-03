import './topMenu.css';
import LoaderBlock from '../loaderBlock';
import ErrorBlock from '../errorBlock';

const TopMenu = (props) => {
    if (!props['menu']){
        if (props['menu'] === null){
            return <LoaderBlock />
        }
        return <ErrorBlock />
    }

    return (
        <ul className='top-menu nesting_1'>
            {props['menu'].map(item => <TopMenuItem nesting='2' class_name="main_menu_item" key={item['id']} {...item} />)}
        </ul>
    )
}

const TopMenuItem = (props) => {
    const { name, href, popup, class_name, nesting} = props;
    const cl = class_name ?? '';
    const title = <a className={cl} href={href ?? '#'}>{name}</a> ;
    const nesting_new = Number(nesting) + 1;
    const popup_menu = !popup ? '' : 
    <ul className={'nesting_' + nesting}>
        {popup.map(item => <TopMenuItem nesting={nesting_new} key={item['id']} {...item} />)}
    </ul>;
    return (
        <li onMouseOver={submenuPositionCalculation}>
            {title}
            {popup_menu}
        </li>
    )
}

const submenuPositionCalculation = (event) => {
    const target = event.currentTarget;
    const parent = target.parentNode;
    const ul = target.querySelector('ul');
    if (!ul) return false;
    if (!parent.classList.contains('nesting_1')){
        const w = window.innerWidth;
        const right_edge = Math.trunc(w - target.getBoundingClientRect()['right']);
        if (right_edge > w/4){
            ul.classList.add('right_menu_show');
            ul.classList.remove('left_menu_show');
        } else{
            ul.classList.remove('right_menu_show');
            ul.classList.add('left_menu_show');
        }
    }
    
}

export default TopMenu;