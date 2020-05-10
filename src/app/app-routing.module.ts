import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CartPageComponent } from './cart-page/cart-page.component'

const routes: Routes = [
  { path : '', component: ListingPageComponent},
  {path : 'cart', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
