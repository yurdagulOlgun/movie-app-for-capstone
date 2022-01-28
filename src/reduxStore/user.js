const ADD_FAVORITE =  "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const ADD_SEEN_LIST = "ADD_SEEN_LIST"
const REMOVE_SEEN_LIST = "REMOVE_SEEN_LIST"




export const addSeenList = (id, title, poster_path, release_date) => ({
    type: ADD_SEEN_LIST,
    payload: {id,  title, poster_path, release_date}
})

export const removeSeenList = (id) => ({
    type: REMOVE_SEEN_LIST,
    payload: id
})

export const addFavorite = (id, title, poster_path, release_date) => ({
    type: ADD_FAVORITE,
    payload: {
      id,
      title,
      poster_path,
      release_date
    }
})

export const removeFavorite = (id) => ({
    type: REMOVE_FAVORITE,
    payload: id
})




const userReducer = (user =[ {
    "avatarUrl": "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
    "username": "username",
    "password": "password",
    "socials": {
        "twitter": "https://twitter.com/",
        "instagram": "https://www.instagram.com/"
    },
    "seenList": {
        "seenFilms": [
        ],
        "totalCount": 0
    },
    "favoritesList": {
        "favoritesFilms": [
        ],
        "totalCount": 0
    },
    "joinDate": "December 2021"
}], action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return  [...user, {favoritesList: { favoritesFilms: [...user.favoritesList.favoritesFilms, action.payload]}}] 
        case REMOVE_FAVORITE:
            return user?.favoritesList?.favoritesFilms?.filter((item) => item.id !== action.payload)
        case ADD_SEEN_LIST:
            return [...user,{seenList: {seenFilms: [...user.seenList.seenFilms,action.payload]}}]
            case REMOVE_SEEN_LIST:
                return user?.seenList?.seenFilms?.filter((item) => item.id !== action.payload)
        default: 
            return user
    }
}

export default userReducer;
// favoritesList: { favoritesFilms: [...user, action.payload]}
