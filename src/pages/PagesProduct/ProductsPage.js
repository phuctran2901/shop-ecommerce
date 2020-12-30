import React, { Component } from 'react';
import Category from '../../components/category/category';
import ListProducts from '../../components/ListProducts/ListProducts';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { connect } from 'react-redux';
import ItemProduct from '../../components/ListProducts/ItemProduct';
import {actAddToCart, actFilterProduct } from '../../actions/index';
import styles from './PagesProduct.module.css';

class ProductsPage extends Component {
    showProduct = (products, trademark) => {
        var Atrademark = trademark === "iphone" ? "Apple" : trademark;
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {     
                    return product.trademark.toLowerCase() === Atrademark.toLowerCase()  ? <ItemProduct
                        index={index}
                        key={index}
                        product={product}
                        onAddToCart = {this.props.onAddToCart}
                    /> : '';
            })
        }
        return result;
    }
    render() {
        var { match, products, filter } = this.props;
        //tìm kiếm
        if (filter) {
            // tìm kiếm với keyword 
            if(filter.searchKeyword) {
                products = this.props.products;
                products = products.filter((product) => {
                    return product.name.toLowerCase().indexOf(filter.searchKeyword.toLowerCase()) !== -1;
                })
            }
            // tìm kiếm với rating
            if (filter.rating) {
                if (filter.rating === 5) {
                    products = this.props.products; // Reset products
                    products = products.filter((product) => {
                        return product ? product.rating === 5 : '';
                    })
                }
                if (filter.rating === 4) {
                    products = this.props.products;
                    products = products.filter((product) => {
                        return product ? product.rating === 4 : '';
                    })
                }
                if (filter.rating === 3) {
                    products = this.props.products;
                    products = products.filter((product) => {
                        return product ? product.rating <= 3 : '';
                    })
                }
            }
            // Tìm kiếm với giá
            if (filter.price) {
                if (filter.price === 1) {
                    products = this.props.products;
                    products = products.filter((product) => {
                        return product ? product.price_original > 100 : '';
                    })
                }
                if (filter.price === 2) {
                    products = this.props.products;
                    products = products.filter((product) => {
                        return product ? product.price_original < 100 : '';
                    })
                }
            }
        }

        return (
            <div className = {`${styles.products}`}>
                <NavigationBar match={match} />
                <div className="container" style={{ padding: `50px 0` ,}}>
                    <div className="row no-gutters">
                        <div className="col-xl-3 col-md-4 col-lg-4">
                            <Category
                                onFilterProduct={this.props.onFilterProduct}
                            />
                        </div>
                        <div className="col-md-8 col-lg-8 col-xl-9 col-12">
                            <ListProducts products={products}>
                                {this.showProduct(products,match.params.trademark)}
                            </ListProducts>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        products: state.products,
        filter: state.filterProduct,
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterProduct: (price, rating,searchKeyword) => {
            dispatch(actFilterProduct(price,rating,searchKeyword))
        },
        onAddToCart : (product, amount) => {
            dispatch(actAddToCart(product, amount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);