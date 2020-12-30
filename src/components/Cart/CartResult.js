import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './cart.module.css';
class CartResult extends Component {
    render() {
        return (
            <div>
                <p className={styles.cart_total}>Subtotal : {`${this.props.children} $`}</p>
                <div className={styles.cart_btn}>
                    <Link
                    to = "/check/cart" 
                    style={{ backgroundColor: '#FF0000', border: 'none', outline: 'none',marginRight : 12 }} 
                    className="btn btn-primary">View Cart</Link>
                    <Link 
                    to = "/check/cart" 
                    style={{ backgroundColor: '#FF0000', border: 'none', outline: 'none' }} 
                    className="btn btn-primary">Check Out</Link>
                </div>
            </div>
        );
    }
}

export default CartResult;