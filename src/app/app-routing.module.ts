import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProdListComponent } from './components/prod-list/prod-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CheckoutOrderComponent } from './components/checkout-order/checkout-order.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent
  },
  { 
    path: 'products', component: ProdListComponent
  },
  { 
    path: 'products/:id', component: ProductDetailComponent
  },
  { 
    path: 'cart', component: CartComponent
  }, 
  { 
    path: 'confirm', component: CheckoutOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
