import { Action } from "@ngrx/store";
import { Product } from "../model/product";

export enum ProductActionsTypes {
    GET_ALL_PRODUCTS = '[Product] Get All products',
    GET_ALL_PRODUCTS_SUCCESS = '[Product] Get All products success',
    GET_ALL_PRODUCTS_ERROR = '[Product] Get All products error',

    GET_SELECTED_PRODUCTS = '[Product] Get Selected products',
    GET_SELECTED_PRODUCTS_SUCCESS = '[Product] Get Selected products success',
    GET_SELECTED_PRODUCTS_ERROR = '[Product] Get Selected products  error',

    GET_AVAILABLE_PRODUCTS = '[Product] Get Available products',

    SEARCH_PRODUCTS = '[Product] Search products',
    SEARCH_PRODUCTS_SUCCESS = '[Product] Search products success',
    SEARCH_PRODUCTS_ERROR = '[Product] Search products error',

    SELECT_PRODUCT = '[Product] Select product',
    SELECT_PRODUCT_SUCCESS = '[Product] Select product success',
    SELECT_PRODUCT_ERROR = '[Product] Select product error',

    NEW_PRODUCT = '[Product] New product',
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

export class GetSelectedProductsAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS;
    constructor(public payload: any) {}
}

export class GetSelectedProductsSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {}
}


export class GetSelectedProductsErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public payload: string) {}
}

export class SearchProductsAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS;
    constructor(public payload: string) {}
}

export class SearchProductsSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {}
}


export class SearchProductsErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SEARCH_PRODUCTS_ERROR;
    constructor(public payload: string) {}
}

export class SelectProductsAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCT;
    constructor(public payload: Product) {}
}

export class SelectProductsSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCT_SUCCESS;
    constructor(public payload: Product) {}
}


export class SelectProductsErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SELECT_PRODUCT_ERROR;
    constructor(public payload: string) {}
}


export type ProductsActions =
GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction |
GetSelectedProductsAction | GetSelectedProductsSuccessAction | GetSelectedProductsErrorAction |
SearchProductsAction | SearchProductsSuccessAction | SearchProductsAction |
SelectProductsAction | SelectProductsSuccessAction | SelectProductsErrorAction;