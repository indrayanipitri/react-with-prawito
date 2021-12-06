import React, {Component, Fragment} from "react";
import ImgLogo from 'assets/image/logo.png'
import ImgProduct from 'assets/image/sweater.png'
import ImgCart from 'assets/image/cart.png'

import './Product.css'

class Product extends Component {

    state = {
        order: 4,
        name: 'Pipit'
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        })
    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="header"> 
                    <div className="logo">
                        <img src={ImgLogo} alt="logo" />
                    </div>
                    <div className="troley">
                        <img src={ImgCart} alt="cart" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>

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
            </Fragment>
        )
    }
}

export default Product;