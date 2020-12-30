import * as types from './../constants/actionsType';
import callApi from './../untils/apiCaller';
import * as actions from './../actions/index.js';

export  const actFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actions.actFetchProduct(res.data));
        }).catch(err => console.log(err))
    }
}
export const actFetchProduct = (products) => {
    return {
        type: types.FETCH_ALL_PRODUCTS,
        products
    }
}


export const actHandleTabsArrival = (keyword) => {
    return {
        type : types.HANDLE_TABS_ARRIVAL,
        keyword
    }
}

export const actFilterProduct = (price, rating,searchKeyword) => {
    return {
        type : types.FILTER_PRODUCT,
        filter : {
            price : price,
            rating : rating,
            searchKeyword : searchKeyword
        }
    }
}

export const actAddToCart = (product, amount) => {
    return {
        type : types.ADD_TO_CART,
        product,
        amount
    }
}

export const actDeleteToCart = (id) => {
    return {
        type: types.DELETE_TO_CART,
        id
    }
}

export const actUpdateAmountCart = (id, amount) => {
    return {
        type : types.UPDATE_AMOUNT_CART,
        id,
        amount
    }
}

export const actSubmitInfo = (info) => {
    return {
        type : types.SUBMIT_INFO,
        info
    }
}

export const actResetCart = () => {
    return {
        type : types.RESET_CART
    }
}

export const actToggleModal = (messenger, icon) => {
    return {
        type : types.TOGGLE_MODAL,
        messenger,
        icon
    }
}

export const actIsLogin = (boolean) => {
    return {
        type : types.IS_LOGIN,
        boolean
    }
}