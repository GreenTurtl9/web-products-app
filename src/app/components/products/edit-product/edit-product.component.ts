import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditProductAction, UpdateProductAction } from 'src/app/ngrx/products.actions';
import { DataState, ProductsState } from 'src/app/ngrx/products.reducer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId: number;
  productFormGroup?: FormGroup;

  submitted: boolean = false;
  formBuilt: boolean = false;
  state: ProductsState | null = null;
  readonly DataState = DataState;


  constructor(private activateRoute: ActivatedRoute, private productsService: ProductsService,
    private formBuilder: FormBuilder, private router: Router, private store: Store<any>) {
    this.productId = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.store.dispatch(new EditProductAction(this.productId));
    this.store.subscribe(state => {
      this.state = state.catalogState;
      if (this.state?.dataState == DataState.LOADED_STATE) {
        if (this.state.currentProduct != null) {
          this.productFormGroup = this.formBuilder.group({
            id: [this.state.currentProduct.id, Validators.required],
            name: [this.state.currentProduct.name, Validators.required],
            price: [this.state.currentProduct.price, Validators.required],
            quantity: [this.state.currentProduct.quantity, Validators.required],
            selected: [this.state.currentProduct.selected],
            available: [this.state.currentProduct.available]
          });
          // this.productFormGroup = this.formBuilder.group({});
          // let data = this.state?.currentProduct;
          // for(let f in data){
          //   this.productFormGroup?.addControl(f, new FormControl(data[f], Validators.required));
          // }
          this.formBuilt = true;
        }
      }
    })
  }

  onUpdateProduct() {
    this.submitted = true;
    if (this.productFormGroup?.invalid) return;
    this.store.dispatch(new UpdateProductAction(this.productFormGroup?.value));
  }
  
  okUpdated() {
    this.router.navigateByUrl("/products");
  }

}
