import * as types from './../../constants/actionsType';
var initialState = {};

const info = (state = initialState, action) => {
    switch(action.type) {
        case types.SUBMIT_INFO:
            return action.info;
        default : return state;
    }
}

export default info;