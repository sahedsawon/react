import {combineReducers} from 'redux';

const valueReducer = (value=0,action) => {
    if(action.type === 'INCREMENT_VALUE') {
        return value++;
    }else if(action.type === 'DECREMENT_VALUE') {
        return value>0?value--:value;
    }else {
        return value;
     }
}

export default combineReducers({
    reduce : valueReducer
});