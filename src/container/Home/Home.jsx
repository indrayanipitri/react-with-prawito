import React, {Component} from 'react';
import YouTubeComp from 'component/YouTubeComp/YouTubeComp';
import Product from 'component/Product/Product'
class Home extends Component {
    render () {
        return (
            <div>
                <p> Youtube Component </p>
                <hr />
                <YouTubeComp time="7.12" title="Pitri Indrayani" desc="3250x ditonton"/>
                <YouTubeComp time="8.02" title="Wiedia Junaedi" desc="2800x ditonton"/>
                <YouTubeComp time="5.04" title="Shin Ryujin" desc="4250x ditonton"/>
                <YouTubeComp />

                <hr />
                <hr/>
                <p>Update Parent Component melalui Child Component</p>
                <hr/>
                <Product />
            </div>
        )
    }
}
export default Home;