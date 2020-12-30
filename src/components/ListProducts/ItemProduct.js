import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './../../pages/PagesProduct/PagesProduct.module.css';
import { AiFillStar, AiOutlineStar, AiFillCheckCircle } from 'react-icons/ai';
import {SUCCESS_ADD_TO_CART} from '../../constants/messenger';
import {toast} from 'react-toastify';
class ItemProduct extends Component {
    showRating = (product) => {
        var result = [];
        if (product) {
            for (var i = 1; i <= product.rating; i++) {
                result.push(<AiFillStar className={styles.card_icon} key={i} />)
            }
            for (var j = 1; j <= (5 - product.rating); j++) {
                result.push(<AiOutlineStar className={styles.card_icon} key={product.rating + j} />)
            }
        }
        return result;
    }
    scrollTop = () => { // scroll về vị trí top product
        window.scroll(0, 0);
    }
    onAddToCart = (product, amount) => {
        this.props.onAddToCart(product, amount);
        toast.success(<div><AiFillCheckCircle/> {SUCCESS_ADD_TO_CART}</div>,{
            autoClose : 1500,
            position : toast.POSITION.TOP_RIGHT
        })
    }
    render() {
        var { product } = this.props;
        return (
            <div className="col-6 col-xl-4 col-sm-6 col-lg-6 col-md-6">
                <div className = {styles.detail}>
                    <Link
                        onClick={this.scrollTop}
                        to={`/products/${product.trademark}/${product.name}.${product.id}.html`}
                        className={styles.link_wrapper}>
                        <div className={styles.card} key={product.id}>
                            <div className={styles.wrapper_img}>
                                <img src={product.photo} className={styles.card_img} alt={product.name} />
                            </div>
                        </div>
                    <div className={styles.card_title}>
                        <h4 className={styles.card_name}> {product.name} </h4>
                        <div className={styles.card_price}>
                            <span className={styles.card_price_original}>
                                {`$ ${product.price_original}.00`}
                            </span>
                        </div>
                        <div className={styles.card_rating}>
                            {this.showRating(product)}
                        </div>
                    </div>
                    </Link>
                    <button
                        onClick={() => this.onAddToCart(product, 1)}
                        className={`btn btn-default ${styles.active}`}>
                        Add To Cart
                </button>
                </div>
            </div>
        );
    }
}

export default ItemProduct;