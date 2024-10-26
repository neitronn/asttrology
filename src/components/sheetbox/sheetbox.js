import './sheetbox.css'

const Sheetbox = ({class_name, data_ul}) => {
    const class_name_ul = 'custom_ul ' + class_name;
    return (
        <ul className={class_name_ul}>
            {data_ul.map(item => {
                    const {id, ico, text, link} = item;

                    const text_html = link ? <a href={link} className="sheet-box_text">{text}</a> : text

                    return (
                        <li key={'item_list-'+id}>
                             {text_html}
                            <div className="sheet-box_ico"><div className="sheet-box_ico_wrap">{ico}</div></div> 
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Sheetbox;