import { ProductState } from './../../shared/states/product-state';
import { AddProduct } from './../../shared/actions/product-action';
import { ProductService } from './../get-products.service';
import { Product } from './../../shared/models/products';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]> = this.productService.getSearchResults();
  productSubscription: Subscription;


  loaded : boolean = true;
  constructor(private productService: ProductService, private store: Store) { }


  onClickAdd(product: Product) {
    this.addProduct(product);
  }

  addProduct(product: Product) {
      this.store.dispatch(new AddProduct(product));
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   // this.loaded = true;
    // }, 3000);
  }
}
