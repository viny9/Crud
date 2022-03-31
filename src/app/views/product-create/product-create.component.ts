import { Product } from '../Product.model';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  newProduct:Product = {
    name: '',
    price: NaN
  }

  inputName = new FormControl('', [Validators.required])
  inputPrice = new FormControl('', [Validators.required])

  constructor(private product:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.product.create(this.newProduct).subscribe(() => {
      this.product.showMessage('Operação realizada com succeso')
      this.router.navigate(["product"])
    })
  }

  cancel() {
    this.router.navigate(["product"])
  }

  getError() {
    return 'Você deve digitar alguma coisa'
  }

}
