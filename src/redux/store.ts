import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { DispatchBucetsType } from "./actions/bucketActions"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { persistStore } from 'redux-persist';
import thunk from "redux-thunk";
import persisterReducer from "./reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware:any) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
})