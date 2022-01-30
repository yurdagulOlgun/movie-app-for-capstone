const FILTER_DATA = "FILTER_DATA";

export const addGenres = (data) =>( {
    type: FILTER_DATA,
    payload: data,
})

const filterReducer = (filtered =[],action) => {
    switch(action.type){
        case FILTER_DATA:
            return [...filtered, action.payload]
        default:
            return filtered
    }
}

export default filterReducer