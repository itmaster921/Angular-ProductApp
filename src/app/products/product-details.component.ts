import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromProduct from './state/product.reducer';
import { IProduct } from './product';
@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Details';
  constructor(private route: ActivatedRoute, private router: Router, private store: Store<fromProduct.State>) {
    console.log(this.route.snapshot.paramMap.get('id'));
  }
  product: IProduct;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.pipe(select(fromProduct.showImage)).subscribe(products => {
      this.product = products.products.find(p => p.id === +id);
    });
  }
  onBack() {
    this.router.navigate(['/products']);
  }
}
