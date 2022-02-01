//ACTON TYPES
const ADD_SEEN_LIST = "ADD_SEEN_LIST";
const REMOVE_SEEN_LIST = "REMOVE_SEEN_LIST";

//ACTION CREATORS

export const addSeenList = (id, title, poster_path, release_date,genre_ids) => ({
  type: ADD_SEEN_LIST,
  payload: {
    id,
    title,
    poster_path,
    release_date,
    genre_ids,
  },
});

export const removeSeenList = (id) => ({
  type: REMOVE_SEEN_LIST,
  payload: id,
});

//REDUCER
const seenReducer = (seenList ={seenFilms :[], count:0}, action) => {
  switch (action.type) {
    case ADD_SEEN_LIST:
        return {...seenList, seenFilms: [...seenList.seenFilms, action.payload], count: [ ...seenList.seenFilms].length+1 }
    case REMOVE_SEEN_LIST:
      return {...seenList, seenFilms:[...seenList?.seenFilms?.filter((item) => item.id !== action.payload)],  count: [ ...seenList.seenFilms].length-1}
    default:
      return seenList;
  }
};

export default seenReducer;
