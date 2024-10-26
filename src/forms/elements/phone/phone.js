import './phone.css';
import React, {Component} from 'react';
import Select from '../select';

export default class Phone extends Component{

    state = {
        code : {
            activ_item : 'rus',
            empty : false,
            data : [
                {val : 'rus', val_name : <span>+7</span>},
                {val : 'bel', val_name : <span>+9</span>}
            ]
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
        return (
            <div className='phone_number'>
              
                <Select classes="" param={this.state['code']} action={this.action} name_param="code" />
            </div>
        )
    }
}