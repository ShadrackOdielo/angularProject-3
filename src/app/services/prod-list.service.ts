import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; //access to a stream of data returned from the API
import { HttpClient } from '@angular/common/http'; // access the HTTP methods to make requests to a server via an API
import { Products } from '../models/productsModel';

@Injectable({
  providedIn: 'root'
})
export class ProdListService {
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>('../assets/data.json');
  }

  getProductsById(): Observable<Products> {
    return this.http.get<Products>(`../assets/data.json/`);
  }
}
