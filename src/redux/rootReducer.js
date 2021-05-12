import { combineReducers } from 'redux';
import categoryReducer from './categorySlice';
import recipeReducer from './recipeSlice'
import likeReducer from './likeSlice'

const rootReducer = combineReducers({
    category: categoryReducer,
    recipe: recipeReducer,
    like: likeReducer
});

export default rootReducer;