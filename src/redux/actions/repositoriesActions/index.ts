import {  createAsyncThunk } from '@reduxjs/toolkit';
import { axiosCancelable } from "../../../axios";
import { getSearchQueries } from "../queries";
import axios from "axios";

export const search = axiosCancelable(($config: any, page: number, value: string) => (dispatch: any) => {
    dispatch(getItems({ $config, page, value }))
})

export const getItems = createAsyncThunk(
    "repositories/get",
    async ({ $config, page, value }: { $config: any, page: number, value: string }, thunkAPI) => {
        try {
            const response = await axios.get(getSearchQueries(value, page), { ...$config });
            const items = response.data.items.map((elem: any) => {
                const { name, description, language, owner, watchers, forks } = elem
                return { name, description, language, author: owner.login, watch: watchers, stars: forks, image: owner.avatar_url }
            })
            const totalCount = response.data.total_count > 1000 ? 1000 : response.data.total_count;
            return { items, totalCount}
        } catch (error: any) {
            thunkAPI.rejectWithValue(error.message)
        }
        
    }

);
