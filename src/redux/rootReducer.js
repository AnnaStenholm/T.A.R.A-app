import { combineReducers } from 'redux';
import categoryReducer from './categorySlice';


const rootReducer = combineReducers({
    category: categoryReducer
});

export default rootReducer;