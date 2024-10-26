import React,{Component } from "react";
import './registration.css';
import Select from "../elements/select";
import DateFields from "../elements/dateField";
import Phone from "../elements/phone";



export default class Registration extends Component{

    state = {
        gender : {
            activ_item : 'male',
            empty : false,
            data : [
                {val : 'male', val_name : 'мужской'},
                {val : 'female', val_name : 'женский'}
            ]
        },
        date_birth : {
            activ_item : '',
        }
    }

    action = (val , param) => {
        this.setState((state) => {
            let res = state[param];
            res['activ_item'] = val;
            return {[param] : res}
        })
    }

    render(){
        const {gender, date_birth} = this.state;
        return (
            <section className="content">
                <form className="registration">
                    <input className="input" placeholder="Имя" />
                    <Select classes="" param={gender} action={this.action} name_param="gender" />
                    <DateFields classes="" param={date_birth} action={this.action} name_param="date_birth" />
                    <Phone />
                </form>
            </section>
        )
    }
}