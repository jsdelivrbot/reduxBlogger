import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

export default combineReducers({
  posts: PostsReducer,
  form: formReducer
});
