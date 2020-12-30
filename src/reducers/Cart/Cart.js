import * as types from '../../constants/actionsType';

var data = JSON.parse(localStorage.getItem('cart')); // lấy dữ liệu từ localStorage

var initialState = data ? data : [];

const Cart = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, action.product.id);
            if (index !== -1) {
                state[index].amount += action.amount;
            }
            else {
                state.push({
                    product: action.product,
                    amount: parseInt(action.amount)
                });
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state]
        case types.DELETE_TO_CART:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state];
        case types.UPDATE_AMOUNT_CART:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state[index].amount = action.amount;
            }
            localStorage.setItem('cart', JSON.stringify(state))
            return [...state];
        case types.RESET_CART:
            state = [];
            localStorage.setItem('cart', JSON.stringify(state))
            return state;
        default: return [...state];
    }
}


//Tìm vị trí trong cart

var findIndex = (cart, id) => {
    var result = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === id) {
                result = i;
            }
        }
    }
    return result;
}


export default Cart;