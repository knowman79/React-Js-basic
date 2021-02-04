import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handleplus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })

        
    }

    handleminus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://i.pinimg.com/736x/a6/7d/fc/a67dfc3b47e6abefc821d04d70dd0526.jpg" alt="" />
                        <p className="product-title">Jersey Madrid Fanart</p>
                        <p className="product-price">Rp. 990.000</p>
                    </div>
                    <div className="counter">
                        <button className="minus" onClick={this.handleminus}>-</button>
                        <input className="inputCounter" type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handleplus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;