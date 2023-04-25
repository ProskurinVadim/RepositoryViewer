import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store };
