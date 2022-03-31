import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private product:ProductService) { }

  ngOnInit(): void {
    }

    get title() {
     return this.product.titleInfo.title
    }

    get icon() {
      return this.product.titleInfo.icon
    }
}
