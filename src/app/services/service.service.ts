import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  productsList
  constructor(private http: HttpClient) { }
  getProductdetails():Observable<any> {
    return this.http.get("../../assets/json/products.json")
  }
  setProducts(productsList) {
    console.log(productsList)
    this.productsList = productsList;
  }
  getProducts(): Observable<any> {
    console.log(this.productsList)
    return this.productsList
  }
}
