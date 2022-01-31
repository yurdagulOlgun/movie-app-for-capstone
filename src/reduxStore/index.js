import { combineReducers, createStore } from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage
 from "redux-persist/lib/storage";
import favoriteReducer from "./favorite";
import seenReducer from "./seenList";
import filterReducer from "./sortFilter";
import loginReducer from "./user";
import loadMoreReducer from "./loadMore";
import changeThemeReducer from "./themeChanger";

const rootReducer= combineReducers({
    favorites: favoriteReducer,
    seenList: seenReducer,
    login: loginReducer,
    filtered: filterReducer,
    moreData: loadMoreReducer,
    changeTheme: changeThemeReducer,
})

const persistConfig = {
    key:"root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
