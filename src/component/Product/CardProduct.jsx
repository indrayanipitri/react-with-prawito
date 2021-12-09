import React, {Component} from "react";
import ImgProduct from 'assets/image/sweater.png'

import './Product.css'

class CardProduct extends Component {

    state = {
        order: 4,
        name: 'Pipit'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src={ImgProduct} alt="sweater" />
                    </div>
                    <p className="product-title"> Sweater Cakep </p>
                    <p className="product-price">Rp 650.000</p>

                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input className="text-count" type="text" value={this.state.order} />
                        <button className ="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
         
        )
    }
}

export default CardProduct;