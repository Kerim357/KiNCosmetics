import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () =>
      import('./modules/homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./modules/product-page/product-page.module').then((m) => m.ProductPageModule),
  },
  {
    path: 'contactUs',
    loadChildren: () =>
      import('./modules/contact-us/contact-us.module').then((m) => m.ContactUsModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/homepage/homepage.module').then((m) => m.HomepageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
