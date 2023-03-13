import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { FormDetailsComponent } from './components/form-details/form-details.component';
import { CheckoutOrderComponent } from './components/checkout-order/checkout-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    NavBarComponent,
    HomeComponent,
    ProductItemComponent,
    ProductDetailComponent,
    CartComponent,
    CartItemComponent,
    FormDetailsComponent,
    CheckoutOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgbCollapseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
