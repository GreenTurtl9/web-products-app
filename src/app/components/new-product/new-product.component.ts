import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productFormGroup = this.formBuilder.group({
    name: ["", Validators.required],
    price: [200, Validators.required],
    quantity: [10, Validators.required],
    selected: [false, Validators.required],
    available: [false, Validators.required],
  })

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSaveProduct() {
    this.submitted =true;
    if(this.productFormGroup.invalid) return;
    this.productsService.saveProduct(this.productFormGroup.value).subscribe(data => {
      this.router.navigateByUrl("/products")
      alert("product saved!");
    });
  }

}
