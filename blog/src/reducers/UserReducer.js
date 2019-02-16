export const UserReducer = (state={},action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return action.payload;
        default:
        return state;
    }
}