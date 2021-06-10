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
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
