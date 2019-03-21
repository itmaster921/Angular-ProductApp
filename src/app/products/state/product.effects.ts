import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productAction from './product.action';
import {  of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { IProduct } from '../product';

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  loadProducts$ = this.action$.pipe(
    ofType(productAction.ProductActionTypes.Load),
    mergeMap((action: productAction.Load) =>
      this.productService
        .getProducts()
        .pipe(
          map(
            (product: IProduct[]) => new productAction.ReceivedProduct(product)
          ),
          catchError((err: any) => of(new productAction.Failed(err.message)))
        )
    )
  );
}
