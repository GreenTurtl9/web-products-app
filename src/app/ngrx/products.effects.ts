import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { ProductsService } from "../services/products.service";
import { GetAllProductsErrorAction, GetAllProductsSuccessAction, ProductActionsTypes } from "./products.actions";

@Injectable()
export class ProductsEffect {
    constructor(private productsService: ProductsService, private effectActions: Actions) { }

    getAllProductsEffect: Observable<Action> = createEffect(() => {
        return this.effectActions.pipe(
            ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
            mergeMap((action) => {
                return this.productsService.getAllProducts().pipe(
                    map((data) => {
                        return new GetAllProductsSuccessAction(data)
                    }),
                    catchError(err => of( new GetAllProductsErrorAction(err)))
                )
            })
        );
    });

}       