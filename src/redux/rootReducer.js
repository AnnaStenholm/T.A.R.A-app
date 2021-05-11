import { combineReducers } from 'redux';
import categoryReducer from './categorySlice';
import recipeReducer from './recipeSlice'


const rootReducer = combineReducers({
    category: categoryReducer,
    recipe: recipeReducer
});

export default rootReducer;