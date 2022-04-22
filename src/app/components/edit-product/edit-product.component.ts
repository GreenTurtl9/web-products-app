import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId: number;
  submitted: boolean = false;
  productFormGroup?: FormGroup;

  constructor(private activateRoute: ActivatedRoute, private productsService: ProductsService,
    private formBuilder: FormBuilder, private router: Router, private eventDriverService:EventDriverService) {
    this.productId = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId).subscribe(product => {
      this.productFormGroup = this.formBuilder.group({
        id: [product.id, Validators.required],
        name: [product.name, Validators.required],
        price: [product.price, Validators.required],
        quantity: [product.quantity, Validators.required],
        selected: [product.selected, Validators.required],
        available: [product.available, Validators.required]
      })
    })
  }

  onUpdateProduct() {
    this.submitted =true;
    if(this.productFormGroup?.invalid) return;
    this.productsService.editProduct(this.productFormGroup?.value).subscribe(product => {
      this.eventDriverService.publishEvent({type: ProductActionsTypes.PRODUCT_UPDATED});
      this.router.navigateByUrl("/products");
      alert(product.name+" updated!");
    });
  }

}
