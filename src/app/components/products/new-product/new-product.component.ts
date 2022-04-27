import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddProductAction, SaveProductAction } from 'src/app/ngrx/products.actions';
import { DataState, ProductsState } from 'src/app/ngrx/products.reducer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productFormGroup?: FormGroup;

  submitted: boolean = false;
  state: ProductsState | null = null;
  readonly DataState = DataState;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService,
    private router: Router, private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new AddProductAction({}));
    this.store.subscribe(state => {
      this.state = state.catalogState;
      if(this.state?.dataState == DataState.NEW_STATE){
        this.productFormGroup = this.formBuilder.group({
          name: ["", Validators.required],
          price: [200, Validators.required],
          quantity: [10, Validators.required],
          selected: [false, Validators.required],
          available: [false, Validators.required],
        })
      }
    })
  }

  onNewProduct() {
    this.store.dispatch(new AddProductAction({}));
  }

  onProducts() {
    this.router.navigateByUrl("/products")
  }

  onSaveProduct() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) return;
    this.store.dispatch(new SaveProductAction(this.productFormGroup?.value));
      //this.router.navigateByUrl("/products");
  }

}
