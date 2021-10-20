import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';


export default (posts = [], action) => {
    switch(action.type){
        case LIKE:
             return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case FETCH_ALL:
            return action.payload; //actuall posts
        case CREATE:
            return [ ...posts, action.payload];
        case UPDATE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));//if it is equal to updated thn post updated
        default:
            return posts;
    }
}