import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../Models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = "http://localhost:9090/api/v1/products";

  //apiPath = 'http://localhost:9090';

  constructor(private httpClient: HttpClient) { }

  // List/Index
  getAllProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(`${this.apiUrl}`);
  }
  // Create
  AddProduct(prod: Products): Observable<Object>{
    return this.httpClient.post(`${this.apiUrl}`, prod);
  }
  // Fetching/Detail
  GetProductDetail(id:number): Observable<Products>{
    return this.httpClient.get<Products>(`${this.apiUrl}/${id}`);
  }
  // Updating
  UpdateProductDetail(id: number, prod: Products): Observable<Object> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, prod);
  }
  // Delete
  DeleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
