import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CardinComponent } from './cardin/cardin.component';
import { ProductComponent } from './product/product.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { UserComponent } from './user/user.component';
import { UserTableComponent } from './user-table/user-table.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdctCreateComponent } from './prodct-create/prodct-create.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    HeaderComponent,
    CardinComponent,
    ProductComponent,
    ProductTableComponent,
    UserComponent,
    UserTableComponent,
    ProductEditComponent,
    UserEditComponent,
    CreateProductComponent,
    EditUserComponent,
    UserViewComponent,
    ProdctCreateComponent,
    EditProductComponent,
    LoginComponent,
    DashboardContainerComponent
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
