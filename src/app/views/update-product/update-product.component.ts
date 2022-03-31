import { FormControl, Validators } from '@angular/forms';
import { Product } from '../Product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productUpdate:Product = {
    name:'',
    price: 0
  }

  inputName = new FormControl('', [Validators.required])
  inputPrice = new FormControl('', [Validators.required])

  constructor(private product:ProductService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.product.readById(id).subscribe((infos:any) => {
      this.productUpdate = infos
    })
  }

  update (){
    const id = this.route.snapshot.params['id']
    this.product.update(this.productUpdate, id).subscribe(() => {
      this.product.showMessage('Operação realizada com sucesso')
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
