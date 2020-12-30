import React, { Component } from 'react';
import styles from '../Home/HomePage.module.css'
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar, AiFillCheckCircle } from 'react-icons/ai'
import Card from './../../components/Card/Card';
import { connect } from 'react-redux';
import { actAddToCart } from './../../actions/index';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Featured from '../../components/home/featured/featured';
import { toast } from 'react-toastify';
import {SUCCESS_ADD_TO_CART} from '../../constants/messenger';
class PagesCard extends Component {
    showProductsFeatured = (products, brand) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return product.trademark.toLowerCase() === brand.toLowerCase() ?
                    <SwiperSlide key={index} tag='li'>
                        <div style={{ textAlign: 'center' }}>
                            <Link
                                onClick={this.scrollTop}
                                to={`/products/${product.trademark}/${product.name}.${product.id}.html`}
                                style={{ textDecoration: 'none' }}>
                                <div className={styles.card_featured}>
                                    <div className={styles.wrapper_img}>
                                        <img src={product.photo} className={styles.card_img} alt={product.name} />
                                    </div>
                                    <div className={styles.card_title}>
                                        <h4 className={styles.card_name}> {product.name} </h4>
                                        <p className={styles.card_price}> {`$ ${product.price_original}.00`} </p>
                                        <div className={styles.card_rating}>
                                            {this.showRating(product)}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <button
                                onClick={() => this.onAddToCart(product, 1)}
                                className={`btn btn-default ${styles.active}`}>Add To Cart</button>
                        </div>
                    </SwiperSlide> : '';
            })
        }
        return result;
    }
    scrollTop = () => {
        window.scroll(0,0);
    }
    onAddToCart = (product, amount) => {
        this.props.onAddToCart(product, amount);
        toast.success(<div><AiFillCheckCircle /> {SUCCESS_ADD_TO_CART}</div>, {
            autoClose: 1500,
            position: toast.POSITION.TOP_RIGHT
        })
    }
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
    render() {
        var { match, products } = this.props;
        var brand = match.params.trademark;
        var id = match.params.id;
        var card = products.map((product, index) => {
            return product.id === Number(id) ? <Card
                product={product}
                key={index}
                onAddToCart={this.props.onAddToCart}
            /> : '';
        });
        return (
            <div>
                <NavigationBar match={this.props.match} />
                {card}
                <Featured match={match}>
                    {this.showProductsFeatured(products, brand)}
                </Featured>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product, amount) => {
            dispatch(actAddToCart(product, amount))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PagesCard);