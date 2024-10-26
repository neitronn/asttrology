import './select.css';

const Select = ({classes, param, action, name_param}) => {
    const {activ_item, data, empty} = param;
    const empty_html = empty ?  <option value=""></option> : '';
    const return_result = (e) => {
        action(e.target.value, name_param);
    }

    return (
        <select className={'input ' + classes} defaultValue={activ_item} onChange={return_result}>
            {empty_html}
            {data.map(item => {
                const {val, val_name} = item;
                return  <option key={'select_' + val} value={val}>{val_name}</option>;     
                }
           )}
        </select>
    )
}

export default Select;