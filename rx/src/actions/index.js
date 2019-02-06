export const incrementActionCreator = (value) => {
    return {
        type : "INCREMENT_VALUE",
        payload : value
    }
};

export const decrementActionCreator = (value) => {
    return {
        type : "DECREMENT_VALUE",
        payload : value
    }
};