import { FETCH_DATA } from '../Actions/types';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_DATA:
            return action.payload;
            default:
                return state;
    }
}