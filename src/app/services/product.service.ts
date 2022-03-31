import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from '../views/Product.model'
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api:string = environment.apiFake

 private headInfos = new BehaviorSubject<Object>({
    title: '',
    icon: ''
  })

  constructor(private http:HttpClient, private message:MatSnackBar) { }

  get titleInfo() {
    return this.headInfos.value
  }

  set titleInfo(headInfos:any) {
    this.headInfos.next(headInfos)
  }

  read():Observable<Product> {
    return this.http.get<Product>(`${this.api}/products`).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  readById(id:number):Observable<Product> {
    return this.http.get<Product>(`${this.api}/products/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  create(product:any):Observable<Product> {
    return this.http.post<Product>(`${this.api}/products`, product).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  update(product:any, id:number):Observable<Product> {
    return this.http.put<Product>(`${this.api}/products/${id}`, product).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }

  remove(id:number):Observable<Product> {
    return this.http.delete<Product>(`${this.api}/products/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    )
  }
  
  showMessage(msg:string, isError:boolean = false) {
    this.message.open(msg, 'X', {
      duration:3000,
      verticalPosition:"top",
      horizontalPosition:'center',
      panelClass: isError? ['msg-error'] : ['msg-success']
    } )
  }

  handleError(e:any): Observable<any> {
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }
}
