import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { ConstactUsComponent } from './components/pages/constact-us/constact-us.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductPageComponent,
    ProductsComponent,
    ConstactUsComponent,
    CartComponent,
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
