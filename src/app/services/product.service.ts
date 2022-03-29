import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api:string = environment.apiFake

  constructor(private http:HttpClient) { }

  read() {
    return this.http.get(`${this.api}/products`)
  }

  readById(id:number) {
    return this.http.get(`${this.api}/products/${id}`)
  }

  create(product:any) {
    return this.http.post(`${this.api}/products`, product)
  }

  update(product:any, id:number) {
    return this.http.put(`${this.api}/products/${id}`, product)
  }

  remove(id:number) {
    return this.http.delete(`${this.api}/products/${id}`)
  }
}
