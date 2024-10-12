import React, {Component} from "react";
import "./topSlider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import Button from "../button";
import Sheetbox from "../sheetbox/sheetbox";



import 'swiper/css';

export default class TopSlider extends Component{

    slide = ({type, h1, h2, p, ul, btn}) => {

        let class_name = `slide-wrap slide-${type}`;

        let ContentSlide = '';

        switch (type){
            case ('default'):
                const h1_html = h1 ? <h1>{h1}</h1> : '';
                const h2_html = h2 ? <h2>{h2}</h2> : '';
                const p_html = p ? <p>{p}</p> : '';
                const btn_html = btn ? <Button {...btn} /> : '';
                const ul_html =  ul ? <Sheetbox {...ul} /> : '';
                ContentSlide = () => {
                    return (
                        <div className="information-slide">
                            <div className="information-slide_text">
                                {h1_html}
                                {h2_html}
                                {p_html}
                                {btn_html}
                            </div>
                            <div className="information-slide_points">
                                {ul_html}
                            </div>
                        </div>
                    )
                }
                break;
            default:
        }

        return (
            <div className={class_name}>
                <div className="slide-content">
                    <ContentSlide />
                </div>
            </div>
        )
    }

    render (){
       
        return (
            <div className="top-slider">
                 <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={1}
                    slidesPerView={1}
                    speed={1200}
                    loop={true}
                    autoplay={{
                        delay: 5000
                      }}
                    navigation
                >

                {this.props['data'].map(item => <SwiperSlide key={'top_slider_'+item['id']}> <this.slide {...item}/> </SwiperSlide>)}

                </Swiper>
            </div>
        )
    }
}