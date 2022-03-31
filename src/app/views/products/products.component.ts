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
  columns = ['id', 'name', 'price', 'actions']

  constructor( private product:ProductService, private dialog:MatDialog) {
    this.product.titleInfo = {
      title: 'Produtos', 
      icon: 'storefront'
    }
   }

  ngOnInit(): void {
    this.product.read().subscribe((infos:any) => {
     this.data = infos
    })
  }

  delete(id:number) {
   const dialog = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '200px',
    })

    dialog.afterClosed().subscribe((result:boolean) => {
      if(result == true) {
        this.product.remove(id).subscribe(() => {
          this.product.showMessage('Operação realizada com sucesso')
          window.location.reload()
        })
      } else {} 
    })
  }
}

