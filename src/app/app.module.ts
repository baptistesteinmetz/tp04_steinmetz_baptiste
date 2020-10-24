import { ProductState } from './../shared/states/product-state';
import { NgxsModule } from '@ngxs/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInputDirective } from './customdirectives.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductService } from './get-products.service';
import { AppComponent } from './app.component';
import { HeaderFormComponent } from './header-form/header-form.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { RecapComponent, PhonePipe, CodePipe } from './recap/recap.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'tp02', component: FormComponent },
  { path: 'tp03', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'tp04', component: ShoppingCartComponent },
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
    ShoppingCartComponent,
    ProductDetailComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule,
    NgxsModule.forRoot([
      ProductState
    ]),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
