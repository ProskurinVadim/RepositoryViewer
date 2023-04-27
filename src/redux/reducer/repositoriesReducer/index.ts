import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getItems } from "../../actions/repositoriesActions";
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

export const repositorySlice = createSlice({
    name: 'repositories',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getItems.pending, (state: IRepState, action) => {
                state.loading = true;
            })
            .addCase(getItems.fulfilled, (state: IRepState, action: any) => {
                if (!action.meta.arg.$config.cancelToken.reason) {
                    state.error = "";
                    state.loading = false;
                    state.items = action.payload.items;
                    state.totalCount = action.payload.totalCount;
                }
            })
            .addCase(getItems.rejected, (state: IRepState, action: PayloadAction<any>) => {
                state.error = action.payload;
                state.loading = false;
            })
             
    }
})
export default repositorySlice.reducer