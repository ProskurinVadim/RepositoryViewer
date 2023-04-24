import { combineReducers } from "redux";
import { persistReducer, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import bucketReducer from "./bucketReducer";

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['buket_list']
}

// put in blacklist loading and error, because we don't want to store them in local storage

const buketPersistConfig = {
    key: 'buket_list',
    storage: storage,
    blacklist: ["loading","error"]
}


const  rootReducer = combineReducers({
    buket_list: persistReducer(buketPersistConfig, bucketReducer)
})

export default persistReducer(rootPersistConfig, rootReducer)
