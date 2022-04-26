import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import { AddProductSuccessAction, DeleteProductErrorAction, DeleteProductSuccessAction, GetAllProductsErrorAction, GetAllProductsSuccessAction, GetSelectedProductsErrorAction, GetSelectedProductsSuccessAction, ProductActionsTypes, ProductsActions, SaveProductErrorAction, SaveProductSuccessAction, SearchProductsErrorAction, SearchProductsSuccessAction, SelectProductsErrorAction, SelectProductsSuccessAction } from "./products.actions";

@Injectable()
export class ProductsEffect {
    constructor(private productsService: ProductsService, private effectActions: Actions) { }

    getAllProductsEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
            mergeMap((action) => {
                return this.productsService.getAllProducts()
                .pipe(
                    map((data) => {
                        return new GetAllProductsSuccessAction(data)
                    }),
                    catchError(err => of( new GetAllProductsErrorAction(err)))
                )
            })
        );
    });

    getSelectedProductsEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(ProductActionsTypes.GET_SELECTED_PRODUCTS),
            mergeMap((action) => {
                return this.productsService.getSelectedProducts()
                .pipe(
                    map((data) => {
                        return new GetSelectedProductsSuccessAction(data)
                    }),
                    catchError(err => of( new GetSelectedProductsErrorAction(err)))
                )
            })
        );
    });

    searchProductsEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(ProductActionsTypes.SEARCH_PRODUCTS),
            mergeMap((action: ProductsActions) => {
                return this.productsService.searchProducts(action.payload)
                .pipe(
                    map((data) => {
                        return new SearchProductsSuccessAction(data)
                    }),
                    catchError(err => of( new SearchProductsErrorAction(err)))
                )
            })
        );
    });

    selectProductsEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(ProductActionsTypes.SELECT_PRODUCT),
            mergeMap((action: ProductsActions) => {
                return this.productsService.selectProducts(action.payload)
                .pipe(
                    map((product) => {
                        return new SelectProductsSuccessAction(product)
                    }),
                    catchError(err => of( new SelectProductsErrorAction(err)))
                )
            })
        );
    });

    deleteProductEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(ProductActionsTypes.DELETE_PRODUCT),
            mergeMap((action: ProductsActions) => {
                return this.productsService.deleteProduct(action.payload)
                .pipe(
                    map(() => {
                        return new DeleteProductSuccessAction(action.payload)
                    }),
                    catchError(err => of( new DeleteProductErrorAction(err)))
                )
            })
        );
    });

    addProductEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(ProductActionsTypes.ADD_PRODUCT),
            map((action: ProductsActions) => {
                return new AddProductSuccessAction({});
            })
        );
    });

    saveProductEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(ProductActionsTypes.SAVE_PRODUCT),
            mergeMap((action: ProductsActions) => {
                return this.productsService.saveProduct(action.payload)
                .pipe(
                    map((product) => {
                        return new SaveProductSuccessAction(product)
                    }),
                    catchError(err => of( new SaveProductErrorAction(err)))
                )
            })
        );
    });

}       