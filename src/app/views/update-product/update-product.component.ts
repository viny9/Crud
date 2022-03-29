import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productUpdate = {
    name:'',
    price: 0
  }

  constructor(private product:ProductService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.product.readById(id).subscribe((infos:any) => {
      this.productUpdate = infos
    })
  }

  update (){
    const id = this.route.snapshot.params['id']
    this.product.update(this.productUpdate, id).subscribe(() => {})
    this.router.navigate(["product"])
  }

  cancel() {
    this.router.navigate(["product"])
  }

}
