import { Action } from "@ngrx/store";
import { Product } from "../model/product";
import { ProductActionsTypes, ProductsActions } from "./products.actions";

export enum DataState {
    LOADING_STATE = 'LOADING_STATE',
    LOADED_STATE = 'LOADED_STATE',
    ERROR_STATE = 'ERROR_STATE',
    INITIAL_STATE = 'INITIAL_STATE'
}

export interface ProductsState {
    products: Product[],
    errorMessage: string,
    dataState: DataState
}

const initState: ProductsState = {
    products: [],
    errorMessage: "",
    dataState: DataState.INITIAL_STATE
}
export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
    switch(action.type) {
        case ProductActionsTypes.GET_ALL_PRODUCTS :
            return {...state, dataState: DataState.LOADING_STATE};
        case ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS :
            return {...state, dataState: DataState.LOADED_STATE, products: (<ProductsActions>action).payload};
        case ProductActionsTypes.GET_ALL_PRODUCTS_ERROR :
            return {...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload};
        default : return {...state};
    }
}