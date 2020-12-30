import React, { Component } from 'react';

class CartEmpty extends Component {
    render() {
        return (
            <div>
                <p style = {{fontSize : 14,color : '#8285BD',letterSpacing: 1,padding: "12px 0 12px 12px",opacity:0.6}}>
                    No Products In The Cart
                </p>
            </div>
        );
    }
}

export default CartEmpty;