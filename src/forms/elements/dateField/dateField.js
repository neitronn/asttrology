import './dateField.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
import React, {Component} from 'react';

export default class DateFields extends Component {
    state = {
        selected_date : this.props['param']['activ_item'] && this.props['param']['activ_item'] !== '' ? new Date(this.props['param']['activ_item'].split(".").reverse().join("-")) : ''
    }

    return_result = (date) => {
        this.setState(() => {
            const {action, name_param} = this.props; 
            const m = + date.getMonth() + 1;
            const res = date.getDate() + '.' + m + '.' + date.getFullYear();
            action(res, name_param);
            return {selected_date : date}
        })  
    }
    
   render(){
        return (
            <DatePicker
                selected={this.state['selected_date']}
                locale={ru} 
                className={"input " + this.props['classes']}
                dateFormat="dd.MM.yyyy"
                onChange={(date) => {
                    this.return_result(date);    
                }}
                placeholderText="Дата рождения"
            />
        )
   }
}

