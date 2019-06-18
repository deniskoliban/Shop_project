import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes =[
  { path: 'General', component: GeneralComponent},
  { path: 'ShoppingCart', component: ShoppingCartComponent},
  { path: 'Product', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    ShoppingCartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
