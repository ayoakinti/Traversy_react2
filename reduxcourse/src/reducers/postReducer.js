import { FETCH_POSTS, NEW_POST } from "../Actions/types";

const intialState = {
    posts: [],
    post: {}
}

export default function (state = intialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload
            }
            
        //     break;
    
        default: return state;
    }
}