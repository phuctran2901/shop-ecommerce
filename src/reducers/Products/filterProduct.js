import * as types from '../../constants/actionsType';

var initialState = {};

const filterProduct = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER_PRODUCT:
            return action.filter;
        default : return state;
    }
}

export default filterProduct;