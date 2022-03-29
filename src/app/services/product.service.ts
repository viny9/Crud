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
}
