import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data:any
  columns = ['id', 'name', 'preco', 'acoes']

  constructor( private product:ProductService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.product.read().subscribe(infos => {
     this.data = infos
    })
  }

  delete(id:any) {
   const dialog = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '200px',
    })

    dialog.afterClosed().subscribe(result => {
      if(result == true) {
        this.product.remove(id).subscribe(() => {})
        window.location.reload()
      } else {}
    })
  }
}
