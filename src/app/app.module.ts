import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CartComponent } from './components/cart/cart.component';
import { SortComponent } from './components/sort/sort.component';
import { FilterComponent } from './components/filter/filter.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ServiceService} from './services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { NouisliderModule } from 'ng2-nouislider';


import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CartComponent,
    SortComponent,
    FilterComponent,
    ShoppingListComponent,
    HeaderComponent,
    ListingPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NouisliderModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
