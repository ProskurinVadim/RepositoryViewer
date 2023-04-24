import { bucketActions } from "../../actionsNames";
import { IListItem } from "../../../types";

export interface SetItems {
	type: typeof bucketActions.SET_ITEMS;
	payload: { items: IListItem[] };
}
export interface ItemsError {
	type: typeof bucketActions.SET_ITEM_ERROR;
	payload: { error: string };
}

export interface ItemsLoading {
	type: typeof bucketActions.SET_ITEM_LOADING;
	payload: { loading: boolean };
}

export interface ItemsDelete {
	type: typeof bucketActions.DELETE_ITEM;
	payload: { id: number };
}

export interface ItemsDeleteAll {
	type: typeof bucketActions.DELETE_ALL;
}

export interface ItemsFavor {
	type: typeof bucketActions.FAVORITE_ITEM;
	payload: { id: number };
}

export interface ItemAdd {
	type: typeof bucketActions.ADD_ITEM,
	payload: { name: string, amount: number, description: string, image: string } 
}

export type BucketType = SetItems
	| ItemsError
	| ItemsLoading
	| ItemsDelete
	| ItemsDeleteAll
	| ItemsFavor
	| ItemAdd;