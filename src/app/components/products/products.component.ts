import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { GetAllProductsAction, ProductActionsTypes } from 'src/app/ngrx/products.actions';
import { DataState, ProductsState } from 'src/app/ngrx/products.reducer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsState$: Observable<ProductsState> | null = null;
  readonly DataState = DataState;

  constructor(private productsService: ProductsService, private router: Router,
    private currency: CurrencyPipe, private store: Store<any>) { }

  ngOnInit(): void {
    this.productsState$ = this.store.pipe(
      map((state) => state.catalogState)
    );
    this.onGetAllProducts();
  }

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
  }

  // onGetSelectedProducts() {
  //   this.productsState$ = this.productsService.getSelectedProducts().pipe(
  //     map(data => ({ dataState: DataState.LOADED_STATE, data: data })),
  //     startWith({ dataState: DataState.LOADING_STATE }),
  //     catchError(error => of({ dataState: DataState.ERROR_STATE, errorMessage: error.message }))
  //   );
  // }

  // onGetAvailableProducts() {
  //   this.productsState$ = this.productsService.getAvailableProducts().pipe(
  //     map(data => ({ dataState: DataState.LOADED_STATE, data: data })),
  //     startWith({ dataState: DataState.LOADING_STATE }),
  //     catchError(error => of({ dataState: DataState.ERROR_STATE, errorMessage: error.message }))
  //   );
  // }

  // onSearch(dataForm: any) {
  //   this.productsState$ = this.productsService.searchProducts(dataForm.keyword).pipe(
  //     map(data => ({ dataState: DataState.LOADED_STATE, data: data })),
  //     startWith({ dataState: DataState.LOADING_STATE }),
  //     catchError(error => of({ dataState: DataState.ERROR_STATE, errorMessage: error.message }))
  //   );
  // }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct")
  }

  onSelect(product: Product) {
    this.productsService.selectProducts(product).subscribe(data => {
      product.selected = data.selected;
    }
    )
  }

  onDelete(product: Product) {
    let pop = confirm("Are you sure to delete?")
    if (pop)
      this.productsService.deleteProduct(product).subscribe(data => {
        this.onGetAllProducts();
      })
  }

  onEdit(product: Product) {
    this.router.navigateByUrl("/editProduct/" + product.id)
  }

  onActionEvent($event: any) {
    switch ($event.type) {
      case ProductActionsTypes.GET_ALL_PRODUCTS: this.onGetAllProducts();
        break;
      // case ProductActionsTypes.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts();
      //   break;
      // case ProductActionsTypes.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts();
      //   break;
      // case ProductActionsTypes.NEW_PRODUCT: this.onNewProduct();
      //   break;
      // case ProductActionsTypes.SEARCH_PRODUCTS: this.onSearch($event.payload);
      //   break;
      // case ProductActionsTypes.SELECT_PRODUCT: this.onSelect($event.payload);
      //   break;
      // case ProductActionsTypes.DELETE_PRODUCT: this.onDelete($event.payload);
      //   break;
      // case ProductActionsTypes.EDIT_PRODUCT: this.onEdit($event.payload);
      //   break;
    }
  }

}
