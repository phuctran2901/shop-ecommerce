import * as types from './../constants/actionsType';
var data = localStorage.getItem('isLogin');
var initialState = data ? data : false;

const isLogin = (state = initialState, action) => {
    switch(action.type) {
        case types.IS_LOGIN:
            return action.boolean;
        default : return state;
    }
}

export default isLogin;