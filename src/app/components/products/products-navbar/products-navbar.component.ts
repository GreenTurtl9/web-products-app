import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.productEventEmitter.emit({ type: ProductActionsTypes.GET_ALL_PRODUCTS });
  }

  onGetSelectedProducts() {
    this.productEventEmitter.emit({ type: ProductActionsTypes.GET_SELECTED_PRODUCTS });
  }

  onGetAvailableProducts() {
    this.productEventEmitter.emit({ type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS });
  }

  onNewProduct() {
    this.productEventEmitter.emit({ type: ProductActionsTypes.NEW_PRODUCT });
  }

  onSearch(value: any) {
    this.productEventEmitter.emit({ type: ProductActionsTypes.SEARCH_PRODUCTS, payload: value });
  }

}
