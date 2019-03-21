import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import { reducer } from './state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/product.effects';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'product/:id',
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      },
    ]),
    SharedModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductEffects])

  ]
})
export class ProductModule { }
