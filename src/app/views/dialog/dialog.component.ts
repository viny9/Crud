import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor( private product:ProductService) { }

  ngOnInit(): void {
  }

  delete() {
    // this.product.remove(0).subscribe(() => {})
  }
}