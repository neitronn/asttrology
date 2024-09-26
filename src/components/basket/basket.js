import React, {Component} from "react";
import './basket.css';

export default class Basket extends Component{
    render(){
        return (
            <div className="basket">
                <i className="icon-cart"></i>
                <span className="basket_count">3</span>
            </div>
        )
    }
}