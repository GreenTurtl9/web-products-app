import { Action } from "@ngrx/store";
import { Product } from "../model/product";

export enum ProductActionsTypes {
    GET_ALL_PRODUCTS = '[Product] Get All products',
    GET_ALL_PRODUCTS_SUCCESS = '[Product] Get All products success',
    GET_ALL_PRODUCTS_ERROR = '[Product] Get All products error',
    GET_SELECTED_PRODUCTS = '[Product] Get Selected products',
    GET_AVAILABLE_PRODUCTS = '[Product] Get Available products',
    SEARCH_PRODUCTS = '[Product] Search products',
    NEW_PRODUCT = '[Product] New product',
    SELECT_PRODUCT = '[Product] Select product',
    DELETE_PRODUCT = '[Product] Delete product',
    EDIT_PRODUCT = '[Product] Edit product',
    PRODUCT_SAVED = '[Product] product saved',
    PRODUCT_UPDATED = '[Product] product updated'
}

export class GetAllProductsAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any) {}
}

export class GetAllProductsSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {}
}


export class GetAllProductsErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string) {}
}

export type ProductsActions =
GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction;
