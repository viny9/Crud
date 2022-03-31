import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './views/product-create/product-create.component';
import { ProductsComponent } from './views/products/products.component';
import { UpdateProductComponent } from './views/update-product/update-product.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent},
  
  {path:'product',
  component:ProductsComponent},

  {path:'create',
  component:ProductCreateComponent},

  {path:'update/:id',
  component:UpdateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
