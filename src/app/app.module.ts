import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ConstactUsComponent } from './components/pages/constact-us/constact-us.component';
import { CartComponent } from './components/pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductPageComponent,
    ProductsComponent,
    ConstactUsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
