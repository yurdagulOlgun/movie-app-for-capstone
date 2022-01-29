const USER_LOGIN = "USER_LOGIN"

export const userLogin = (username,password) => ({
    type: USER_LOGIN,
    payload: {username,password},
})

const loginReducer = (user = { 
    avatarUrl: "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
    username: "glolgun",
    password: "password",
    socials: {
        twitter: "https://twitter.com/glolgunn",
        instagram: "https://www.instagram.com/glolgun"
    },
joinDate: "December2021"}, action) => {
    switch(action.type){
        case USER_LOGIN:
            return action.payload.username === user.username && action.payload.password ? {...user, login:true} : {...user, login:false}
        default:
            return user
    }
}

export default loginReducer

// {...user, username: [ ...user.username, action.payload], password: [...user.password, action.payload]} { ...user, userLogin: true } : { ...user, userLogin: false }