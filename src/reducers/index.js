import {combineReducers} from 'redux';
import products from './Products/products';
import keyword from './keyword';
import filterProduct from './Products/filterProduct';
import Cart from './Cart/Cart';
import info from './Info/Info';
import isLogin from './isLogin';
const appReducers = combineReducers({
    products,
    keyword,
    filterProduct,
    Cart,
    info,
    isLogin
})

export default appReducers;