import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {  
  }

  onGetAllProducts() {
    //this.productEventEmitter.emit({ type: ProductActionsTypes.GET_ALL_PRODUCTS });
    this.eventDriverService.publishEvent({ type: ProductActionsTypes.GET_ALL_PRODUCTS });
  }

  onGetSelectedProducts() {
    //this.productEventEmitter.emit({ type: ProductActionsTypes.GET_SELECTED_PRODUCTS });
    this.eventDriverService.publishEvent({ type: ProductActionsTypes.GET_SELECTED_PRODUCTS });
  }

  onGetAvailableProducts() {
    //this.productEventEmitter.emit({ type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS });
    this.eventDriverService.publishEvent({ type: ProductActionsTypes.GET_AVAILABLE_PRODUCTS });
  }

  onNewProduct() {
    //this.productEventEmitter.emit({ type: ProductActionsTypes.NEW_PRODUCT });
    this.eventDriverService.publishEvent({ type: ProductActionsTypes.NEW_PRODUCT });
  }

  onSearch(value: any) {
    //this.productEventEmitter.emit({ type: ProductActionsTypes.SEARCH_PRODUCTS, payload: value });
    this.eventDriverService.publishEvent({ type: ProductActionsTypes.SEARCH_PRODUCTS, payload: value });
  }

}
