import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data:any
  columns = ['id', 'name', 'preco', 'acoes']

  constructor( private product:ProductService) { }

  ngOnInit(): void {
    this.product.read().subscribe(infos => {
     this.data = infos
    })
  }

}
