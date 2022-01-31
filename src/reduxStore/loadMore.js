const LOAD_MORE_DATA = "LOAD_MORE"

export const loadMoreData = (data) => ({
    type: LOAD_MORE_DATA,
    payload: data,
})

const loadMoreReducer = (moreData =[], action) => {
    switch(action.type) {
        case LOAD_MORE_DATA:
            return [...moreData ,action.payload]
        default:
            return moreData
    }
}

export default loadMoreReducer;