import { FETCH_USER, ADD_USER, UPDATE_USER } from '../actions/types';

const defaults = {
    TOPIC: 'javascript',
    DISPLAY_MODE: 'THUMBNAIL',
}
export default (state = {}, action) => {
    console.log('Action Name is ::' + action.type);
    console.log('Users Data is ::' + JSON.stringify(action.users));
    switch (action.type) {
        case ADD_USER:
            return [...state, Object.assign({}, action.user)];
        case FETCH_USER: {
            return action.users
        }
        case UPDATE_USER:
            return state.setIn(['byCustomerId', action.user.customerId], action.user);
        default:
            return state;
    }
}

