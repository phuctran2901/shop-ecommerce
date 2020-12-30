import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './cart.module.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {toast} from 'react-toastify';
import {DELETE_CART_SUCCESS} from '../../constants/messenger';
class cartItem extends Component {
    onDeleteToCart = id => {
        this.props.onDeleteToCart(id);
        toast.success(DELETE_CART_SUCCESS, {
            position : toast.POSITION.TOP_RIGHT,
            autoClose: 1500
        });
    };
    render() {
        var {cart} = this.props;
        return (
            <li className={styles.cart_item}>
                <Link className={styles.wrapper_link} to = {`/products/${cart.product.trademark}/${cart.product.name}.${cart.product.id}.html`} >
                    <img className={styles.cart_img} src = {cart.product.photo} alt ={cart.product.name} />
                        <div className={styles.cart_title}>
                        <p className={styles.cart_name}> {cart.product.name} </p>
                        <div className={styles.cart_number}>
                            <p className={styles.cart_amount}> {cart.amount} </p>
                                    x
                            <p className={styles.cart_price}> {cart.product.price_original - cart.product.discount} </p>
                        </div>
                    </div>
                </Link>
                <span 
                onClick = {() => this.onDeleteToCart(cart.product.id)}
                className = {styles.cart_delete}>
                    <AiFillCloseCircle />
                </span>
            </li>
        );
    }
}

export default (cartItem);