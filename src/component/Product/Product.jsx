import React, {Component, Fragment} from "react";
import ImgLogo from 'assets/image/logo.png'
import ImgProduct from 'assets/image/sweater.png'
import ImgCart from 'assets/image/cart.png'

import './Product.css'
import CardProduct from "./CardProduct";

class Product extends Component {

    state = {
        order: 4,
        name: 'Pipit'
    }

    handleCounterChange =(newValue) => {
        this.setState({
            order:newValue
        })
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

                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;