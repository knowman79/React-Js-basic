import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct';
import './Product.css'

class Product extends Component {
    state = {
        order: 4
    }

    handleCounterCange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://www.flaticon.com/premium-icon/icons/svg/3024/3024624.svg" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://www.flaticon.com/svg/vstatic/svg/3144/3144456.svg?token=exp=1612413022~hmac=68dabc79c82f48f57acd82da06cf8802" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value)=> this.handleCounterCange(value)}/>
            </Fragment>
        );
    }
}

export default Product;