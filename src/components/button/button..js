import './button.css'

const Button = (props) => {
    const {link, name, callback, class_name} = props;
    const class_name_btn = 'custom_btn ' + class_name
    if (link){
        return (
            <a href={link} className={class_name_btn}>
                {name}
            </a>
        )
    } else {
        return (
            <button className={class_name_btn} onClick={callback}>
                {name}
            </button>
        )
    }
    
}

export default Button;