import React, {Component} from "react";
import './app.css';
import Header from "../header";
import AjaxResourc from '../../services/ajax';
import FatalError from "../fatalError/";
import TopPanel from "../topPanel/";

export default class App extends Component{
    state = {
        info : null,
        menu : null,
        pages : null,
        load : false,
        fatal_error : false
    }

    componentDidMount(){
        this.getDataSite();
    }

    res = new AjaxResourc();
    getDataSite(){
    this.res.getInfoSite()
        .then((data) => {
            const {info, menu, pages} = data;
            this.setState({
                info : info ?? false,
                menu : menu ?? false,
                pages : pages ?? false,
                load : true
            })
        })
        .catch((e) => {
            this.setState({
                fatal_error : true,
                load : true
            })
        });
    }

    render (){
        const {info, menu, fatal_error, pages, load} = this.state;

        if (fatal_error){
            return <FatalError/>
        }
        
        let contact =  pages ? pages['contact'] ? pages['contact'] :  false : null;
        if (load){
            if (contact == null)  contact = false;
        }
         
        return (
            <div className="app">
                <Header info={info} />
                <TopPanel menu={menu} contact={contact} />
            </div>
        )
    }
}