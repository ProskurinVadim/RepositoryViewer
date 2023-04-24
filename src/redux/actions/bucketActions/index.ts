import { bucketActions } from "../../actionsNames";
import { ItemsError, ItemsDelete, ItemsLoading, ItemsFavor, ItemsDeleteAll, ItemAdd, SetItems, BucketType } from "./types"
import { IListItem } from "../../../types";
import { Configuration, OpenAIApi } from "openai";
import dumpAxios from "../../../utils/dumpAxios";
import { Dispatch } from "redux";

const loadWrapper = (dispatch: Dispatch<BucketType>,actions: any) => {
    dispatch(loadbucketAction(true));
    dumpAxios(() => {
        dispatch(actions());
        dispatch(loadbucketAction(false));
    })
}

export const setItems = (items: IListItem[]) => (dispatch: Dispatch<BucketType>) => {
    loadWrapper(dispatch, () => setItemsAction(items));
}

const generateDescription = async (name: string, openai: any) => {

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Write description for grocery ${name}`,
        temperature: 0.7,
        max_tokens: 713,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return response.data.choices[0].text
}

const generateImage = async (name: string, openai: any) => {
    const response = await openai.createImage({
        prompt: `grocery ${name}`,
        n: 1,
        size: "1024x1024",
    });
    return response.data.data[0].url;
}

export const addItem = (name: string, amount: number) => async (dispatch: Dispatch<BucketType>) => {
    dispatch(loadbucketAction(true));
    try {
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const description: string = await generateDescription(name, openai);
        const image: string = await generateImage(name, openai);

        dispatch(loadbucketAction(false));
        dispatch(addBucketAction(name, amount, description, image));
    }
    catch (error) {
        console.log(error)
        dispatch(addBucketAction(name, amount,"",""));
        dispatch(loadbucketAction(false));
    }
}

export const deleteItem = (id: number) => (dispatch: Dispatch<BucketType>) => {
    loadWrapper(dispatch, () => deletebucketAction(id));
}

export const deleteAllItems = () => (dispatch: Dispatch<BucketType>) => {
    loadWrapper(dispatch, () => deleteAllBucketAction());
}

export const flavorItems = (id: number) => (dispatch: Dispatch<BucketType>) => {
    loadWrapper(dispatch, () => favorbucketAction(id));
}


const setItemsAction = (items: IListItem[]): SetItems => ({ type: bucketActions.SET_ITEMS, payload: { items } });
const addBucketAction = (name: string, amount: number, description: string, image: string): ItemAdd => ({ type: bucketActions.ADD_ITEM, payload: { name, amount, description, image } });
const loadbucketAction = (loading: boolean): ItemsLoading => ({ type: bucketActions.SET_ITEM_LOADING, payload: { loading } });
const favorbucketAction = (id: number): ItemsFavor => ({ type: bucketActions.FAVORITE_ITEM, payload: { id } });
const deletebucketAction = (id: number): ItemsDelete => ({ type: bucketActions.DELETE_ITEM, payload: { id } });
const deleteAllBucketAction = (): ItemsDeleteAll => ({ type: bucketActions.DELETE_ALL });
const setErrorActions = (error: string): ItemsError => ({ type: bucketActions.SET_ITEM_ERROR, payload: { error } });

export type DispatchBucetsType= typeof addItem | typeof deleteItem | typeof deleteAllItems | typeof flavorItems