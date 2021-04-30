import { combineReducers } from 'redux';
import threadIdReducer from './threadIdReducer';


const rootReducer = combineReducers({

        threadId: threadIdReducer,

    });

export default rootReducer;