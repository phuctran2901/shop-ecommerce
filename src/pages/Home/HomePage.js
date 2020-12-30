import React, { Component } from 'react';
import Banner from './../../components/home/banner/banner';
import Featured from './../../components/home/featured/featured';
import { connect } from 'react-redux';
import styles from './HomePage.module.css';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { GiNorthStarShuriken } from 'react-icons/gi';
import { AiFillStar, AiOutlineStar, AiFillCheckCircle } from 'react-icons/ai';
import Poster from './../../components/home/poster/poster';
import Arrival from './../../components/home/Arrivals/arrival';
import Sale from './../../components/home/Sale/sale';
import * as actions from './../../actions/index';
import { toast } from 'react-toastify';
import { SUCCESS_ADD_TO_CART } from '../../constants/messenger';
class HomePage extends Component {
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
    showProductsFeatured = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return product.featured ?
                    <SwiperSlide key={index} tag='li'>
                        <div style = {{textAlign : 'center'}}>
                            <Link 
                            onClick = {this.scrollTop}
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
                            onClick = {() => this.onAddToCart(product, 1)}
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
    showProductsArrival = (products, keyword) => {
        var result = null;
        // Lọc ra product của từng tab
        if (keyword !== null) {
            result = products.map((product, index) => {
                return product.arrival && product.trademark === keyword ?
                    <SwiperSlide key={index} tag='li'>
                        <div style={{ textAlign: 'center' }}>
                            <Link 
                            onClick = {this.scrollTop}
                            to={`/products/${product.trademark}/${product.name}.${product.id}.html`} 
                            style={{ textDecoration: 'none' }}>
                                <div className={styles.card_featured}>
                                    <div className={styles.wrapper_img}>
                                        <img src={product.photo} className={styles.card_img} alt={product.name} />
                                    </div>
                                    <div className={styles.card_title}>
                                        <h4 className={styles.card_name}> {product.name} </h4>
                                        <div className={styles.card_price}>
                                            <span className={styles.card_price_original}>
                                                {`$ ${product.price_original}.00`}
                                            </span>
                                            <span className={styles.price_discount}>
                                                {`$ ${product.price_original - product.discount}.00`}
                                            </span>
                                        </div>
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
    onAddToCart = (product, amount) => {
        this.props.onAddToCart(product, amount);
        toast.success(<div><AiFillCheckCircle /> {SUCCESS_ADD_TO_CART}</div>, {
            autoClose: 1500,
            position: toast.POSITION.TOP_RIGHT
        })
    }
    render() {
        var { products, onHandleTabs } = this.props;
        var keyword = this.props.keyword == null ? 'Apple' : this.props.keyword;
        return (
            <div>
                <Banner />
                <Featured>
                    {this.showProductsFeatured(products)}
                </Featured>
                <Poster />
                <section className={`container ${styles.p_50}`}>
                    <div className={styles.title_arrival}>
                        <span className={styles.arrival_heading}>SALE</span>
                        <span className={styles.arrival_icon}><GiNorthStarShuriken /></span>
                    </div>
                    <ul className={styles.list_btn}>
                        <li className={styles.item_btn}>
                            <button onClick={() => onHandleTabs('Apple')} className="btn btn-primary">Iphone</button>
                        </li>
                        <li className={styles.item_btn}>
                            <button onClick={() => onHandleTabs('Samsung')} className="btn btn-primary">SamSung</button>
                        </li>
                        <li className={styles.item_btn}>
                            <button onClick={() => onHandleTabs('Sony')} className="btn btn-primary">Sony   </button>
                        </li>
                        <li className={styles.item_btn}>
                            <button onClick={() => onHandleTabs('Xiaomi')} className="btn btn-primary">Xiaomi</button>
                        </li>
                    </ul>
                    <Arrival>
                        {this.showProductsArrival(products, keyword)}
                    </Arrival>
                </section>
                <Sale />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        products: state.products,
        keyword: state.keyword
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onHandleTabs: (keyword) => {
            dispatch(actions.actHandleTabsArrival(keyword))
        },
        onAddToCart: (product, amount) => {
            dispatch(actions.actAddToCart(product, amount))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);