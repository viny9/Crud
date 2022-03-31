import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private product:ProductService) {
    this.product.titleInfo = {
      title: 'Início',
      icon: 'home'
    }
   }

  ngOnInit(): void {
  }

}
