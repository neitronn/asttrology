import React, {Component} from "react";
import './search.css';

export default class Search extends Component{
    render(){
        return(
            <div className="search">
                <input type="text" placeholder="search"></input>
                <button><i className="icon-search"></i></button>
            </div>
        )
    }
}