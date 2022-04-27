import { Action } from "@ngrx/store";
import { Product } from "../model/product";
import { ProductActionsTypes, ProductsActions } from "./products.actions";

export enum DataState {
    LOADING_STATE = 'LOADING_STATE',
    LOADED_STATE = 'LOADED_STATE',
    ERROR_STATE = 'ERROR_STATE',
    INITIAL_STATE = 'INITIAL_STATE',
    NEW_STATE = 'NEW_STATE',
    EDIT_STATE = 'EDIT_STATE',
    UPDATED_STATE = 'UPDATED_STATE'
}

export interface ProductsState {
    products: Product[],
    errorMessage: string,
    dataState: DataState,
    currentProduct: Product | null
}

const initState: ProductsState = {
    products: [],
    errorMessage: "",
    dataState: DataState.INITIAL_STATE,
    currentProduct: null
}
export function productsReducer(state: ProductsState = initState, action: Action): ProductsState {
    switch (action.type) {

        case ProductActionsTypes.GET_ALL_PRODUCTS:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, dataState: DataState.LOADED_STATE, products: (<ProductsActions>action).payload };
        case ProductActionsTypes.GET_ALL_PRODUCTS_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        case ProductActionsTypes.GET_SELECTED_PRODUCTS:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
            return { ...state, dataState: DataState.LOADED_STATE, products: (<ProductsActions>action).payload };
        case ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        case ProductActionsTypes.SEARCH_PRODUCTS:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS:
            return { ...state, dataState: DataState.LOADED_STATE, products: (<ProductsActions>action).payload };
        case ProductActionsTypes.SEARCH_PRODUCTS_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        case ProductActionsTypes.SELECT_PRODUCT:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.SELECT_PRODUCT_SUCCESS:
            var product: Product = (<ProductsActions>action).payload;
            var data: Product[] = state.products.map(p => (p.id == product.id) ? product : p);
            return { ...state, dataState: DataState.LOADED_STATE, products: data };
        case ProductActionsTypes.SELECT_PRODUCT_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        case ProductActionsTypes.DELETE_PRODUCT:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.DELETE_PRODUCT_SUCCESS:
            var product: Product = (<ProductsActions>action).payload;
            var list = [...state.products];
            var index = list.indexOf(product);
            list.splice(index, 1);
            return { ...state, dataState: DataState.LOADED_STATE, products: list };
        case ProductActionsTypes.DELETE_PRODUCT_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        case ProductActionsTypes.ADD_PRODUCT:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.ADD_PRODUCT_SUCCESS:
            return { ...state, dataState: DataState.NEW_STATE };
        case ProductActionsTypes.ADD_PRODUCT_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        case ProductActionsTypes.SAVE_PRODUCT:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.SAVE_PRODUCT_SUCCESS:
            return { ...state, dataState: DataState.LOADED_STATE, products: [...state.products, (<ProductsActions>action).payload]};
        case ProductActionsTypes.SAVE_PRODUCT_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        case ProductActionsTypes.EDIT_PRODUCT:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.EDIT_PRODUCT_SUCCESS:
            return { ...state, dataState: DataState.LOADED_STATE, currentProduct: (<ProductsActions>action).payload };
        case ProductActionsTypes.EDIT_PRODUCT_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        case ProductActionsTypes.UPDATE_PRODUCT:
            return { ...state, dataState: DataState.LOADING_STATE };
        case ProductActionsTypes.UPDATE_PRODUCT_SUCCESS:
            var product: Product = (<ProductsActions>action).payload;
            var data: Product[] = state.products.map(p => (p.id == product.id) ? product : p);
            return { ...state, dataState: DataState.UPDATED_STATE, products: data};
        case ProductActionsTypes.UPDATE_PRODUCT_ERROR:
            return { ...state, dataState: DataState.ERROR_STATE, errorMessage: (<ProductsActions>action).payload };

        default: return { ...state };
    }
}