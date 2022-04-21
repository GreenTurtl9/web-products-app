export enum DataState {
    LOADING_STATE = 'LOADING_STATE',
    LOADED_STATE = 'LOADED_STATE',
    ERROR_STATE = 'ERROR_STATE'
}

export interface AppState<T> {
    dataState: DataState,
    data?: T,
    errorMessage?: string
}

export enum ProductActionsTypes {
    GET_ALL_PRODUCTS = '[Product] Get All products',
    GET_SELECTED_PRODUCTS = '[Product] Get Selected products',
    GET_AVAILABLE_PRODUCTS = '[Product] Get Available products',
    SEARCH_PRODUCTS = '[Product] Search products',
    NEW_PRODUCT = '[Product] New product',
    SELECT_PRODUCT = '[Product] Select product',
    DELETE_PRODUCT = '[Product] Delete product',
    EDIT_PRODUCT = '[Product] Edit product'
}

export interface ActionEvent {
    type : ProductActionsTypes,
    payload?: any
}