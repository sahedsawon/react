import {combineReducers} from 'redux';

const valueReducer = (value=0,action) => {
    if(action.type === 'INCREMENT_VALUE') {
        return value+1;
    }else if(action.type === 'DECREMENT_VALUE') {
        return value-1;
    }else {
        return value;
     }
}

export default combineReducers({
    reduce : valueReducer
});