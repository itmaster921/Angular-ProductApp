import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Store, select } from '@ngrx/store';
import * as fromProduct from './state/product.reducer';
import * as productActions from './state/product.action';
import { takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private store: Store<fromProduct.State>) {

  }
  pageTitle = 'Product List';
  componentActive = true;
  errorMessage$: Observable<string> ;
  imageWidth = 30;
  showImage = false;
  imgMargin = 2;
  _filterby = '';
  filterProduct: IProduct[] = [];
  products$: any;
  get filterby(): string {
    return this._filterby;
  }
  set filterby(value: string) {
    this._filterby = value;
    this.filterProduct = this._filterby
      ? this.products.filter(product => product.name.toLocaleLowerCase().indexOf(this._filterby.toLocaleLowerCase()) !== -1)
      : this.products;

  }
  products: IProduct[] = [];
  ngOnInit() {
    // this.products$ = this.store.pipe(select(fromProduct.showImage));
    this.store.pipe(select(fromProduct.showImage), takeWhile(() => this.componentActive))
      .subscribe(
        (product: any) => {
          this.showImage = product.showImage;
          this.products = product.products.products as IProduct[];
          this.filterProduct = this.products as IProduct[];
        });
    this.errorMessage$ = this.store.pipe(select(fromProduct.showError));
    this.store.dispatch(new productActions.Load());
  }
  ngOnDestroy() {
    this.componentActive = false;
  }
  onRatingClicked(message) {
    this.pageTitle = 'Product List : ' + message;
  }
  onShowImage() {
    this.store.dispatch(new productActions.ToggleProductImage(!this.showImage));
  }

}
