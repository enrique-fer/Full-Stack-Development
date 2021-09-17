import { combineReducers } from 'redux';
import { reducer as Form } from 'redux-form';
import headerNavbar from './headernavbarReducer';
import user from './userReducer';
import shop from './shopReducer';

const rootReducer = combineReducers({
  Form,
  headerNavbar,
  user,
  shop
});

export default rootReducer;