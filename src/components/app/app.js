import React, {Component, memo } from "react";
import './app.css';
import Header from "../header";
import AjaxResourc from '../../services/ajax';
import FatalError from "../fatalError/";
import TopPanel from "../topPanel/";
import TopSlider from "../topSlider";
import Zodiac from "../../sections/zodiac";
import Registration from "../../forms/registration";

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
                            link : '#',
                            text : 'пункт 3'
                         },
                         {
                            id : 4,
                            ico : <i className="icon-dice"></i>,
                            link : '#',
                            text : 'пункт 4'
                         },
                    ]
                }
            },
            {
                id : 2,
                type : 'default',
                h1 : 'Дабро пожаловать 2',
                h2 : 'the Jyotish Astrology 2',
                p : 'Здесь какой то текст с описанием к этому слайду желательно в пару строк для лучшего отоброжения 2',
                btn : {
                    class_name : '',
                    name : 'Подробнее',
                    link : '#'
                },
                ul : {
                    class_name : '',
                    data_ul : [
                        {
                           id : 5,
                           ico : <i className="icon-home3"></i>,
                           link : '#',
                           text : 'пункт 5'
                        },
                        {
                            id : 6,
                            ico : <i className="icon-user"></i>,
                            link : '#',
                            text : 'пункт 6'
                         },
                         {
                            id : 7,
                            ico : <i className="icon-heart"></i>,
                            link : '#',
                            text : 'пункт 7'
                         },
                         {
                            id : 8,
                            ico : <i className="icon-dice"></i>,
                            link : '#',
                            text : 'пункт 8'
                         },
                    ]
                }
            },
            {
                id : 3,
                type : 'default',
                h1 : 'Дабро пожаловать 3',
                h2 : 'the Jyotish Astrology 3',
                p : 'Здесь какой то текст с описанием к этому слайду желательно в пару строк для лучшего отоброжения 3',
                btn : {
                    class_name : '',
                    name : 'Подробнее',
                    link : '#'
                },
                ul : {
                    class_name : '',
                    data_ul : [
                        {
                           id : 9,
                           ico : <i className="icon-home3"></i>,
                           link : '#',
                           text : 'пункт 9'
                        },
                        {
                            id : 10,
                            ico : <i className="icon-user"></i>,
                            link : '#',
                            text : 'пункт 10'
                         },
                         {
                            id : 11,
                            ico : <i className="icon-heart"></i>,
                            link : '#',
                            text : 'пункт 11'
                         },
                         {
                            id : 12,
                            ico : <i className="icon-dice"></i>,
                            link : '#',
                            text : 'пункт 12'
                         },
                    ]
                }
            },
        ],
        sections : {
            zodiac : {
                title : 'Choose Your Zodiac Sign', 
                description : "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat hello Aenean world."
            }
        }
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
        const {top_slider, sections} = this.state;
        return (
            <>
                <TopSlider data={top_slider} />
                <Zodiac {...sections['zodiac']} />
                <Registration />
            </>
        );
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