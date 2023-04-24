import { bucketActions } from "../../actionsNames";
import { BucketType } from "../../actions/bucketActions/types";
import { IListItem } from "../../../types";
const initialState = {
    items: [],
    loading : false,
    error : "",
};
// Add type for  Bucket Reducer 
export interface IBucketState {
    items: IListItem[] | [],
    loading: boolean,
    error: string
}

export default function (state: IBucketState = initialState, action: BucketType) {
    switch (action.type) {
        case bucketActions.ADD_ITEM: {
            const { name, amount, image, description } = action.payload;
            const newItem: IListItem = { name, amount, image, description, favorites: false };
            return {
                ...state,
                items: [...state.items, newItem]
            }
        }
        case bucketActions.SET_ITEMS: {
            return {
                ...state,
                items: [...action.payload.items]
            }
        }
        case bucketActions.SET_ITEM_ERROR: {
            return {
                ...state,
                error: action.payload.error,
            }
        }
        case bucketActions.SET_ITEM_LOADING: {
            return {
                ...state,
                loading: action.payload.loading,
            }
        }
        case bucketActions.DELETE_ITEM: {
            const newItems = [...state.items];
            newItems.splice(action.payload.id, 1,);
            return {
                ...state,
                items: newItems,
            }
        }
        case bucketActions.DELETE_ALL: {
            return {
                ...state,
                items: [],
            }
        }
        case bucketActions.FAVORITE_ITEM: {
            const newItems: IListItem[] = [...state.items]
                .map((elem: IListItem, i) =>
                    i === action.payload.id ? { ...elem, favorites: !elem.favorites } : elem);
            return {
                ...state,
                items: newItems,
            }
        }
            
       
        default : {
            return {
                ...state
            }
        }

    }

}