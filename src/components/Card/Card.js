import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './../../pages/PagesCard/PagesCard.module.css';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter, AiFillYoutube,AiFillCheckCircle} from 'react-icons/ai';
import {FiInstagram} from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';
import {toast} from 'react-toastify';
import * as messenger from '../../constants/messenger';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure();
class card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount : 1
        };
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    onClick = (value) => {
        var {amount} = this.state;
        var newAmount = value + amount;
        if(newAmount > 0) {
            this.setState({
                amount : newAmount
            })
        }
    }
    onAddToCart = (product, amount) => {
        this.props.onAddToCart(product,Number(amount))
        this.setState({
            amount : 1
        })
        toast.success(<div><AiFillCheckCircle/> {messenger.SUCCESS_ADD_TO_CART}</div>,{
            autoClose : 1500,
            position : toast.POSITION.TOP_RIGHT
        })
    }
    render() {
        var {product} = this.props;
        return (
            <div className={`container ${styles.pd_50}`}>
                <div className="row no-gutters">
                    <div className="col-xl-6 col-12">
                        <div className={styles.card_img_wrapper}>
                             <img src={product.photo} className={styles.card_img} alt={product.name} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-12" >
                        <div className={styles.card_wrapper}>
                            <h4 className={styles.card_name}> {product.name} </h4>
                            <p className={styles.card_inventory}>Còn hàng</p>
                            <div className={styles.card_price}>
                                <p className={styles.card_price_new}> {`$ ${product.price_original - product.discount}.00`} </p>
                                {product.price_original - product.discount === product.price_original ? '' : <p className={styles.card_price_original}> {`$ ${product.price_original}.00`} </p>}
                            </div>
                            <p className={styles.card_description}> {product.description} </p>
                            <div className={styles.card_detail}>
                                <div className={styles.card_count}>
                                    <div className={styles.card_detail_decrement}>
                                        <input 
                                        type="button" 
                                        value='-'
                                        onClick = {() => this.onClick(-1)}
                                        />
                                    </div>
                                    <input 
                                    className = {styles.card_input} 
                                    type="number" 
                                    step="1" 
                                    name = "amount"
                                    value = {this.state.amount < 0 ? 1 : this.state.amount}
                                    onChange = {this.onChange}
                                    />
                                    <div className={styles.card_detail_increment}>
                                        <input 
                                        type="button" 
                                        value='+' 
                                        onClick = {() => this.onClick(1)}
                                        />
                                    </div>
                                </div>
                                <div className={styles.card_btn_success}>
                                    <button 
                                    onClick = {() => this.onAddToCart(product, this.state.amount)}
                                    className={styles.card_btn_add}>ADD TO CART</button>
                                </div>
                            </div>
                            <div className = {styles.poster_in}>
                                <span className ={styles.poster_span}> Category: </span>
                                <Link className ={styles.poster_link} to = {`/${product.trademark === "Apple" ? "iphone" : product.trademark.toLowerCase()}`} > {product.trademark === "Apple" ? 'Iphone' : product.trademark} </Link>
                            </div>
                            <div className={styles.card_socical}>
                                <IconContext.Provider value = {{className : `${styles.socical_icons}`}}>
                                    <FaFacebookF/>
                                    <AiOutlineTwitter/>
                                    <FiInstagram/>
                                    <AiFillYoutube/>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default card;