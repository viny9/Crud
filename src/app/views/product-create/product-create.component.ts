import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  newProduct = {
    name: '',
    price: 0
  }

  constructor(private product:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.product.create(this.newProduct).subscribe(() => {})
    this.router.navigate(["product"])
  }

  cancel() {
    this.router.navigate(["product"])
  }

}
