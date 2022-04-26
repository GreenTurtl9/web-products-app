import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product';
import { DeleteProductAction, EditProductAction, SelectProductsAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product?: Product;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.store.dispatch(new SelectProductsAction(product));
  }

  onDelete(product: Product) {
    this.store.dispatch(new DeleteProductAction(product));
  }
  
  onEdit(product: Product) {
    this.store.dispatch(new EditProductAction(product));
  }

}
