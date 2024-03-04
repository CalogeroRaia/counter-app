const counterReducer = (state = 0 , action) => {
    switch (action.type) {
        case 'INCREMENT': 
        return state + action.payload;
        case 'DECREMENT':
            return state - action.payload > 0
            ? state - action : 0;
             default :
             return state;
}
};