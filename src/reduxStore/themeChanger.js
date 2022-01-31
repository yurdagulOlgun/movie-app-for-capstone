const CHANGE_THEME = "CHANGE_THEME"

export const changeThemeAction = (value ) => ({
    type: CHANGE_THEME,
    payload: value,
})

const changeThemeReducer = (theme = "true", action) => {
    switch(action.type){
        case CHANGE_THEME:
            return !action.payload
        default:
            return theme
    }
}

export default changeThemeReducer;