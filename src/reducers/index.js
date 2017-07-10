import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

export default combineReducers({
  posts: PostsReducer
});
