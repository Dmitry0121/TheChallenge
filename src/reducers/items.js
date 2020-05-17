export function items(state = {}, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return { 
                value: action.items, 
                loaded: true
            };
        case 'ITEMS_FETCH_DATA_LOADING':
            return {
                loading: true,
                loaded: false
            };
        case 'ITEMS_FETCH_DATA_ERROR':
            return {
                error: action.error, 
                loading: false,
                loaded: false
            };
        default:
            return state;
    };
};