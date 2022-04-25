import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataState, ProductsState } from 'src/app/ngrx/products.reducer';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() productsState$: Observable<ProductsState> | null = null;

  readonly DataState = DataState;

  constructor() { }

  ngOnInit(): void { }

}
