import * as types from './../../constants/actionsType';
var initialState = [];

const products = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_ALL_PRODUCTS:
            state = Object.values(action.products[0]);
            state.splice(74,1); //bỏ phần tử cuối
            return state;
        default : return [...state];
    }
}

export default products;