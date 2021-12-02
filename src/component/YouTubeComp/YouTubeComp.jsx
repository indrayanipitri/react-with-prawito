import React from 'react'
import ImgThumb from 'assets/image/thumb.jpg'
import './YouTubeComp.css'

const YouTubeComp = (props) => {
    return (
            <div className="youtube-wrapper">
                <div className="img-thumb">
                    <img src={ImgThumb} alt="" />
                    <p className="time">{props.time}</p>
                </div>
                <p className="title">{props.title}</p>
                <p className="desc">{props.desc}</p>
            </div>
    )
}

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Your Name',
    desc: 'xx ditonton'
}

export default YouTubeComp;