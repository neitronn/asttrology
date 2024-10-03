import React, {Component} from "react";
import './userBlock.css';

export default class UserBlock extends Component{
    render(){
        return (
            <div className="user-block">
                <div className="user-block_item">
                    <span className="user-icons"><i className="icon-user"></i></span>
                    <span className="user-block_text">Вход/Регистрация</span>
                </div>
            </div>
        )
    }
}