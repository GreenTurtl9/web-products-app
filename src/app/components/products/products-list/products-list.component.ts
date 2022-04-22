import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, AppState, DataState, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products$: Observable<AppState<Product[]>> | null = null;
  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  readonly DataState = DataState;

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }

  // onSelect(p: Product) {
  //   this.productEventEmitter.emit({ type: ProductActionsTypes.SELECT_PRODUCT, payload: p });
  // }

  // onDelete(p: Product) {
  //   this.productEventEmitter.emit({ type: ProductActionsTypes.DELETE_PRODUCT, payload: p });
  // }

  // onEdit(p: Product) {
  //   this.productEventEmitter.emit({ type: ProductActionsTypes.EDIT_PRODUCT, payload: p });
  // }

  // onActionEvent($event: any) {
  //   this.productEventEmitter.emit($event);
  // }

}
