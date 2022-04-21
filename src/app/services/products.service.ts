import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  host = environment.host;

  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "/products");
  }

  getSelectedProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "/products?selected=true");
  }

  getAvailableProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "/products?available=true");
  }

  searchProducts(keyword: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.host + "/products?name_like=" + keyword);
  }

  selectProducts(p: Product): Observable<Product> {
    p.selected = !p.selected;
    return this.http.put<Product>(this.host + "/products/" + p.id, p);
  }

  deleteProduct(p: Product): Observable<void> {
    return this.http.delete<void>(this.host + "/products/" + p.id);
  }

  saveProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(this.host + "/products/", p);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.host + "/products/" + id);
  }

  editProduct(p: Product): Observable<Product> {
    return this.http.put<Product>(this.host + "/products/" + p.id, p);
  }
}
