import { createAction } from '@reduxjs/toolkit';
import { IListItem } from "../../../types";
import type { Dispatch } from '@reduxjs/toolkit';
import { axiosCancelable } from "../../../axios";
import axios from "axios";

export const search = axiosCancelable(($config:any,page: number, value: string) => (dispatch: Dispatch) => {
    console.log(page,value)
    dispatch(loadItemsAction(true));
    const perPage = 20;
    const queryString = `q=${value}&page=${page}&per_page=${perPage}`;
    const url = `https://api.github.com/search/repositories?${queryString}`;
    axios
        .get(url, { ...$config})
        .then(({ data }) => {
            const newData = data.items.map((elem:any) => {
                const { name, description, language, owner, watchers, forks } = elem
                return { name, description, language, author: owner.login, watch: watchers, stars: forks}
            })
            dispatch(setItemsAction(newData, data.total_count));
            dispatch(loadItemsAction(false));
        })
        .catch((error) => {
            dispatch(loadItemsAction(false));
            dispatch(setErrorActions(error.message))
        })
})

export const setItemsAction = createAction("repositories/add",
    (items: IListItem[], totalCount: number) => ({ payload: { items, totalCount } }));

export const loadItemsAction = createAction("repositories/loading",
    (loading: boolean) => ({ payload: loading }));

export const setErrorActions = createAction("repositories/error",
    (error: string) => ({ payload: error }));
