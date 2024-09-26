import React, {Component} from "react";
import './app.css';
import Header from "../header";
import AjaxResourc from '../../services/ajax';
import FatalError from "../fatalError/fatalError";
import TopMenu from "../topMenu/topMenu";

export default class App extends Component{
    state = {
        info : null,
        menu : null,
        fatal_error : false
    }

    componentDidMount(){
        this.getDataSite();
    }

    res = new AjaxResourc();
    getDataSite(){
    this.res.getInfoSite()
        .then((data) => {
            const {info, menu} = data;
            this.setState({
                info : info,
                menu : menu
            })
        })
        .catch((e) => {
            this.setState({
                fatal_error : true
            })
        });
    }

    render (){
        const {info, menu, fatal_error} = this.state;

        if (fatal_error){
            return <FatalError/>
        }
        return (
            <div className="app">
                <Header info={info} />
                <TopMenu menu={menu} />
            </div>
        )
    }
}