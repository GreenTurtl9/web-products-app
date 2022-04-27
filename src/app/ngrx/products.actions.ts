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

    ADD_PRODUCT = '[Product] Add product',
    ADD_PRODUCT_SUCCESS = '[Product] Add product success',
    ADD_PRODUCT_ERROR = '[Product] Add product error',

    SAVE_PRODUCT = '[Product] Save product',
    SAVE_PRODUCT_SUCCESS = '[Product] Save product success',
    SAVE_PRODUCT_ERROR = '[Product] Save product error',

    DELETE_PRODUCT = '[Product] Delete product',
    DELETE_PRODUCT_SUCCESS = '[Product] Delete product success',
    DELETE_PRODUCT_ERROR = '[Product] Delete product error',

    EDIT_PRODUCT = '[Product] Edit product',
    EDIT_PRODUCT_SUCCESS = '[Product] Edit product success',
    EDIT_PRODUCT_ERROR = '[Product] Edit product error',

    UPDATE_PRODUCT = '[Product] Update product',
    UPDATE_PRODUCT_SUCCESS = '[Product] Update product success',
    UPDATE_PRODUCT_ERROR = '[Product] Update product error'
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


export class DeleteProductAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCT;
    constructor(public payload: Product) {}
}

export class DeleteProductSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCT_SUCCESS;
    constructor(public payload: Product) {}
}

export class DeleteProductErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.DELETE_PRODUCT_ERROR;
    constructor(public payload: string) {}
}


export class AddProductAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.ADD_PRODUCT;
    constructor(public payload: any) {}
}

export class AddProductSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.ADD_PRODUCT_SUCCESS;
    constructor(public payload: any) {}
}

export class AddProductErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.ADD_PRODUCT_ERROR;
    constructor(public payload: string) {}
}


export class SaveProductAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCT;
    constructor(public payload: Product) {}
}

export class SaveProductSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCT_SUCCESS;
    constructor(public payload: Product) {}
}

export class SaveProductErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.SAVE_PRODUCT_ERROR;
    constructor(public payload: string) {}
}


export class EditProductAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCT;
    constructor(public payload: number) {}
}

export class EditProductSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCT_SUCCESS;
    constructor(public payload: Product) {}
}


export class EditProductErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.EDIT_PRODUCT_ERROR;
    constructor(public payload: string) {}
}


export class UpdateProductAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCT;
    constructor(public payload: Product) {}
}

export class UpdateProductSuccessAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCT_SUCCESS;
    constructor(public payload: Product) {}
}


export class UpdateProductErrorAction implements Action{
    type: ProductActionsTypes = ProductActionsTypes.UPDATE_PRODUCT_ERROR;
    constructor(public payload: string) {}
}


export type ProductsActions =
GetAllProductsAction | GetAllProductsSuccessAction | GetAllProductsErrorAction |
GetSelectedProductsAction | GetSelectedProductsSuccessAction | GetSelectedProductsErrorAction |
SearchProductsAction | SearchProductsSuccessAction | SearchProductsAction |
SelectProductsAction | SelectProductsSuccessAction | SelectProductsErrorAction |
DeleteProductAction | DeleteProductSuccessAction | DeleteProductErrorAction |
AddProductAction | AddProductSuccessAction | AddProductErrorAction |
SaveProductAction | SaveProductSuccessAction | SaveProductErrorAction |
EditProductAction | EditProductSuccessAction | EditProductErrorAction |
UpdateProductAction | UpdateProductSuccessAction | UpdateProductErrorAction;