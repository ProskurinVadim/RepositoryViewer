import { createReducer } from '@reduxjs/toolkit';
import type { PayloadAction , Dispatch } from '@reduxjs/toolkit';

import { setErrorActions, setItemsAction, loadItemsAction } from "../../actions/repositoriesActions";
import { IListItem } from "../../../types";

const initialState = {
    items: [],
    loading: false,
    totalCount: 0,
    error: "",
};

export interface IRepState {
    items: IListItem[] | [],
    loading: boolean,
    error: string,
    totalCount: number
}

interface ISetActions {
    items: IListItem[] | [],
    totalCount: number
}

const repositoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setErrorActions, (state: IRepState, action: PayloadAction<string> ) => {
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(loadItemsAction, (state: IRepState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        })
        .addCase(setItemsAction, (state: IRepState, action: PayloadAction<ISetActions>) => {
            state.error = "";
            state.loading = false;
            state.items = action.payload.items;
            state.totalCount = action.payload.totalCount;
        })
})
export default repositoryReducer