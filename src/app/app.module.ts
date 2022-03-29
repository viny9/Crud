import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './components/head/head.component';
import { HomeComponent } from './views/home/home.component'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { ProductsComponent } from './views/products/products.component'
import { ProductCreateComponent } from './views/product-create/product-create.component'
import { UpdateProductComponent } from './views/update-product/update-product.component'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './views/dialog/dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    ProductCreateComponent,
    UpdateProductComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
