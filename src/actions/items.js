export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
};

export function itemsFetchDataLoading() {
    return {
        type: 'ITEMS_FETCH_DATA_LOADING'
    };
}

export function itemsFetchDataError(error) {
    return {
        type: 'ITEMS_FETCH_DATA_ERROR',
        error
    };
};

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsFetchDataLoading());
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    dispatch(itemsFetchDataError(response.statusText));
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)));
    };
};