import * as types from './../constants/actionsType';
var initialState = null;

const keyword = (state = initialState, action) => {
    switch(action.type) {
        case types.HANDLE_TABS_ARRIVAL:
            return action.keyword;
        default : return state;
    }
}

export default keyword;