import './zodiac.css'
import Headline from '../../components/headline'
import Sheetbox from '../../components/sheetbox/';
import img from './cycle.jpg'

const Zodiac = (props) => {

    const zodiac_left = [
        {id: 10_1, ico: <span className='zodiac_font'>a</span>, text : <><a href="/">Овен</a><p>21 марта — 19 апреля</p><span></span></>},
        {id: 10_2, ico: <span className='zodiac_font'>b</span>, text : <><a href="/">Телец</a><p>20 апреля — 20 мая</p><span></span></>},
        {id: 10_3, ico: <span className='zodiac_font'>c</span>, text : <><a href="/">Близнецы</a><p>21 мая — 20 июня</p><span></span></>},
        {id: 10_4, ico: <span className='zodiac_font'>d</span>, text : <><a href="/">Рак</a><p>21 июня — 22 июля</p><span></span></>},
        {id: 10_5, ico: <span className='zodiac_font'>e</span>, text : <><a href="/">Лев</a><p>23 июля — 22 августа</p><span></span></>},
        {id: 10_6, ico: <span className='zodiac_font'>f</span>, text : <><a href="/">Дева</a><p>23 августа — 22 сентября</p><span></span></>},
    ];
    const zodiac_right = [
        {id: 10_1, ico: <span className='zodiac_font'>g</span>, text : <><a href="/">Весы</a><p>23 сентября — 22 октября</p><span></span></>},
        {id: 10_2, ico: <span className='zodiac_font'>h</span>, text : <><a href="/">Скорпион</a><p>23 октября — 21 ноября</p><span></span></>},
        {id: 10_3, ico: <span className='zodiac_font'>i</span>, text : <><a href="/">Стрелец</a><p>22 ноября — 21 декабря</p><span></span></>},
        {id: 10_4, ico: <span className='zodiac_font'>j</span>, text : <><a href="/">Козерог</a><p>22 декабря — 19 января</p><span></span></>},
        {id: 10_5, ico: <span className='zodiac_font'>k</span>, text : <><a href="/">Водолей</a><p>20 января — 18 февраля</p><span></span></>},
        {id: 10_6, ico: <span className='zodiac_font'>l</span>, text : <><a href="/">Рыбы</a><p>19 февраля — 20 марта</p><span></span></>},
    ];

    

    const numSegments = 12;
    const segmentAngle = 360 / numSegments;
    const gapAngle = 3; // Размер отступа между сегментами

    const colors = ['#F9A825', '#FF7043', '#8BC34A', '#00796B', '#673AB7', '#FF5722', '#3F51B5', '#FFC107', '#795548', '#9E9E9E', '#CDDC39', '#FF9800'];
    const symbols = ['j', 'k', 'l', 'f', 'e', 'd', 'c', 'b', 'a', 'g', 'h', 'i'];

    let segmentsGroup = [];
    let symbolsGroup = [];

    for (let i = 0; i < numSegments; i++) {
        const startAngle = i * segmentAngle;
        const endAngle = (i + 1) * segmentAngle - gapAngle; // Уменьшение угла сегмента для создания отступа

        // Вычисление координат дуги
        const x1 = 150 * Math.cos((Math.PI / 180) * startAngle);
        const y1 = 150 * Math.sin((Math.PI / 180) * startAngle);
        const x2 = 150 * Math.cos((Math.PI / 180) * endAngle);
        const y2 = 150 * Math.sin((Math.PI / 180) * endAngle);

        // Определение большого дугового флага
        const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

        // Создание пути для сегмента
        const pathData = `
            M 0 0
            L ${x1} ${y1}
            A 150 150 0 ${largeArcFlag} 1 ${x2} ${y2}
            Z
        `;

        segmentsGroup.push(<path key={'segment'+i} d={pathData} fill={colors[i]} className='zodiac_segment'></path>);

        // Добавление символов
        const textAngle = (startAngle + endAngle) / 2;
        const textX = 125 * Math.cos((Math.PI / 180) * textAngle);
        const textY = 125 * Math.sin((Math.PI / 180) * textAngle);

        symbolsGroup.push(<text key={'symbol'+i} x={textX} y={textY} className='zodiac_symbol'>{symbols[i]}</text>);
    }


    return (
        <section className='content'>
            <Headline {...props} />
            <div className='zodiac_content'>
                <Sheetbox class_name="zodiac_left"  data_ul={zodiac_left}/>
                <div className='zodiac_center'>
                    <div className='zodiac_center_img'>
                        <span className='zodiac_center_pulse'></span>
                        <img src={img} alt="круг" className='zodiac_center_background' />
                        <img src={img} alt="круг" className='zodiac_img' />
                        <div className="zodiac_container">
                            <svg viewBox="-150 -150 300 300" className="zodiac_circle">
                                <g id="zodiac_segments">
                                    { segmentsGroup.map(item => item) }
                                </g>
                                <g id="zodiac_symbols">
                                    { symbolsGroup.map(item => item) }
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <Sheetbox class_name="zodiac_right"  data_ul={zodiac_right}/>
            </div>
        </section>
    )
}

export default Zodiac