import React from 'react';
import './YtComp.css'

const YtComp = (props) => {
    return (
        <div className="ytwrapper">
            <div className="img-thumb">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-template-design-d45e855a31739ec1f58b2d0ffb7013df_screen.jpg?ts=1591603072" alt="" style = {{height:'5cm', width:'8cm'}}/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

export default YtComp;