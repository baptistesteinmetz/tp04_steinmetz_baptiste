import { HttpClientModule } from '@angular/common/http';
import { ErrorInputDirective } from './customdirectives.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { ProductService } from './get-products.service';

import { AppComponent } from './app.component';
import { HeaderFormComponent } from './header-form/header-form.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RecapComponent, PhonePipe, CodePipe } from './recap/recap.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreBasketComponent } from './store-basket/store-basket.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const appRoutes: Routes = [
  { path: 'tp02', component: FormComponent },
  { path: 'tp03', component: ProductListComponent },
  { path: '', component: ProductListComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderFormComponent,
    FooterComponent,
    FormComponent,
    RecapComponent,
    ErrorInputDirective,
    PhonePipe,
    CodePipe,
    ProductListComponent,
    SearchBarComponent,
    StoreBasketComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
