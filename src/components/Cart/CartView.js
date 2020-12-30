import React, { Component } from 'react';
import styles from './cart.module.css';
import { Link } from 'react-router-dom';
class CartView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1
        };
    }
    componentDidMount() {
        var { cart } = this.props;
        this.setState({
            amount: cart.amount
        })
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = Number(target.value);
        this.setState({
            [name]: value
        })
    }
    onClick = (value) => {
        var { cart } = this.props;
        var amount = this.state.amount;
        var newAmount = amount + value;
        if (newAmount > 0) {
            this.setState({
                amount: newAmount
            }, () => {
                this.props.onUpdateAmountToCart(cart.product.id, this.state.amount);
            })
        }
    }
    onDeleteToCart  = (id) => {
        this.props.onDeleteToCart(id);
    }
    render() {
        var { cart } = this.props;
        return (
            <li className={styles.cart_view_item}>
                <Link to={`/products/${cart.product.name}.${cart.product.id}.html`}>
                    <img className={styles.cart_view_img} src={cart.product.photo} alt={cart.product.name} />
                </Link>
                <div className={styles.cart_view_description}>
                    <Link
                        to={`/products/${cart.product.name}.${cart.product.id}.html`}
                        className={styles.cart_view_name}> {cart.product.name}
                    </Link>
                    <span className={styles.cart_view_category}>
                        <p className={styles.cart_view_title}>Category:</p>
                        <Link
                            className={styles.cart_view_link}
                            to={`/${cart.product.trademark === 'Apple' ? 'iphone' : cart.product.trademark}`}
                        >
                            {cart.product.trademark === 'Apple' ? 'Iphone' : cart.product.trademark}
                        </Link>
                    </span>
                    <button 
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.onDeleteToCart(cart.product.id)}>Remove</button>
                </div>
                <div className={styles.cart_view_details}>
                    <div className={styles.cart_view_prices}>
                        <p className={styles.cart_view_priceReal}> {`$ ${cart.product.price_original - cart.product.discount }`} </p>
                        {cart.product.price_original - cart.product.discount === cart.product.price_original ? '' : <p className={styles.cart_view_discount}> {`$ ${cart.product.price_original}`} </p>}
                    </div>
                    <div className={styles.cart_view_quantity}>
                        <div className={styles.cart_view_decrement}>
                            <input
                                type="button"
                                value='-'
                                onClick={() => this.onClick(-1)}
                            />
                        </div>
                        <input
                            className={styles.cart_view_input}
                            type="number"
                            step="1"
                            value={this.state.amount}
                            name="amount"
                            onChange={this.onChange}
                        />
                        <div className={styles.card_detail_increment}>
                            <input
                                type="button"
                                onClick={() => this.onClick(1)}
                                value='+'
                            />
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default CartView;