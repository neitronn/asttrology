import React, {Component, memo } from "react";
import './app.css';
import Header from "../header";
import AjaxResourc from '../../services/ajax';
import FatalError from "../fatalError/";
import TopPanel from "../topPanel/";
import TopSlider from "../topSlider";

export default class App extends Component{
    state = {
        info : null,
        menu : null,
        pages : null,
        load : false,
        fatal_error : false,
        top_slider : [
            {
                id : 1,
                type : 'default',
                h1 : 'Дабро пожаловать',
                h2 : 'the Jyotish Astrology',
                p : 'Здесь какой то текст с описанием к этому слайду желательно в пару строк для лучшего отоброжения',
                btn : {
                    class_name : '',
                    name : 'Подробнее',
                    link : '#'
                },
                ul : {
                    class_name : '',
                    data_ul : [
                        {
                           id : 1,
                           ico : <i className="icon-home3"></i>,
                           link : '#',
                           text : 'пункт 1'
                        },
                        {
                            id : 2,
                            ico : <i className="icon-user"></i>,
                            link : '#',
                            text : 'пункт 2'
                         },
                         {
                            id : 3,
                            ico : <i className="icon-heart"></i>,
                          
                            text : 'пункт 3'
                         },
                         {
                            id : 4,
                            ico : <i className="icon-dice"></i>,
                          
                            text : 'пункт 4'
                         },
                    ]
                }
            },
            {
                id : 2,
                type : 'default',
                h1 : 'Дабро пожаловать',
                h2 : 'the Jyotish Astrology',
                p : 'Здесь какой то текст с описанием к этому слайду желательно в пару строк для лучшего отоброжения',
                
            },
            {
                id : 3,
                type : 'default',
                h1 : 'Дабро пожаловать',
                h2 : 'the Jyotish Astrology',
                p : 'Здесь какой то текст с описанием к этому слайду желательно в пару строк для лучшего отоброжения',
               
            },
        ]
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

   NoRedrawing = memo(() => {     
        return <TopSlider data={this.state['top_slider']} />;
      });

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
                <this.NoRedrawing />
            </div>
        )
    }
}