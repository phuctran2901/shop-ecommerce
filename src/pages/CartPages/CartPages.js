import React, { Component } from 'react';
import styles from '../../components/Cart/cart.module.css';
import CartList from './../../components/Cart/CartList';
import CartItem from '../../components/Cart/CartItem';
import CartResult from '../../components/Cart/CartResult';
import CartView from '../../components/Cart/CartView';
import CartInfo from '../../components/Cart/CartInfo'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import CartEmpty from '../../components/Cart/CartEmpty';
import { actDeleteToCart, actResetCart, actSubmitInfo, actUpdateAmountCart } from './../../actions/index';
class CartPages extends Component {
    showCartItem = (carts) => {
        var result = null;
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return <CartItem
                    cart={cart}
                    key={index}
                    onDeleteToCart={this.props.onDeleteToCart}
                />
            })
        }
        else {
            return <CartEmpty />
        }
        return result;
    }
    showTotal = (carts) => {
        var result = 0;
        if (carts.length > 0) {
            for (var i = 0; i < carts.length; i++) {
                var total = (carts[i].product.price_original - carts[i].product.discount) * carts[i].amount;
                result += total;
            }
        }
        return result;
    }
    showCartView = (carts) => {
        var result = null;
        if(carts.length > 0 ) {
            result = carts.map((cart,index) => {
                return <CartView
                    cart = {cart}
                    key = {index}
                    onUpdateAmountToCart = {this.props.onUpdateAmountToCart}
                    onDeleteToCart = {this.props.onDeleteToCart}
                />
            })
        }
        else {
            return (
                <div>
                    <p style = {{color: '#333',fontSize: 20,letterSpacing:5,fontWeight:800}}>No Product In The Cart</p>
                    <Link to ="/" style = {{backgroundColor: '#0E243C',border:'none'}}className = "btn btn-primary">Tiếp tục mua sắm</Link>
                </div>
            );
        }
        return result;
    }
    totalCart = (carts) => {
        var result = 0;
        if(carts.length > 0 ) {
            carts.forEach(cart => {
                result += cart.amount * (cart.product.price_original - cart.product.discount);
            });
        }
        return result;
    }
    render() {
        var { Cart, match, history } = this.props;
        var isCheckPages = match ? match.params.slug : '';
        return (
            isCheckPages === 'check' ?
                <div className="container-fluid" style={{ backgroundColor: '#F6F6F6', minHeight: 500, padding: "80px 0" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-mb-12 col-xl-9">
                                <ul style = {{backgroundColor:'#FFFFFF',padding:40}}>
                                    {this.showCartView(Cart)}
                                </ul>
                            </div>
                            <div className="col-12 col-mb-12 col-xl-3">
                                <CartInfo 
                                    totalPrice = {this.totalCart(Cart)}
                                    cart = {Cart}
                                    onSubmitInfo = {this.props.onSubmitInfo}
                                    onResetCart = {this.props.onResetCart}
                                    isLogin = {this.props.isLogin}
                                    history = {history}
                                />
                            </div>
                        </div>
                    </div>
                </div >
                : <div className={styles.cart_container} >
                    <CartList>
                        {this.showCartItem(Cart)}
                    </CartList>
                    <CartResult>
                        {this.showTotal(Cart)}
                    </CartResult>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Cart: state.Cart,
        isLogin : state.isLogin
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteToCart: id => {
            dispatch(actDeleteToCart(id))
        },
        onUpdateAmountToCart : (id,amount) => {
            dispatch(actUpdateAmountCart(id, amount))
        },
        onSubmitInfo : info => {
            dispatch(actSubmitInfo(info))
        },
        onResetCart : () => {
            dispatch(actResetCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPages);