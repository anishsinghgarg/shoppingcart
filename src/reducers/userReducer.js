import { FETCH_USER } from '../actions/types';

const defaults = {
  TOPIC:        'javascript',
  DISPLAY_MODE: 'THUMBNAIL',
}
export default (state = {}, action)  => {
    console.log('Action Name is ::' + action.type);
    console.log('Users Data is ::' + JSON.stringify(action.users));
    switch (action.type) {
        case FETCH_USER: {
            return action.users
        }
        default:
            return state;
    }
}

