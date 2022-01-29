const USER_LOGIN = "USER_LOGIN"

export const userLogin = (username,password) => ({
    type: USER_LOGIN,
    payload: {username,password},
})

const logingReducer = (user = { 
    "avatarUrl": "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
    "username": "username",
    "password": "password",
    "socials": {
        "twitter": "https://twitter.com/glolgunn",
        "instagram": "https://www.instagram.com/glolgun"
    },
"joinDate": "December 2021"}, action) => {
    switch(action.type){
        case USER_LOGIN:
            return [...user,action.payload]
        default:
            return user
    }
}

export default logingReducer