import { Action } from '@ngrx/store';
import { IProduct } from '../product';

export enum ProductActionTypes {
  ToggleProductImage = '[Product] Toggle Image',
  Load ='[Product] Load',
  ReceivedProduct = '[Products] Received Products',
  Failed = '[Product] Failed'

}
export class Load implements Action {
  readonly type=ProductActionTypes.Load;
}
export class Failed implements Action {
  readonly type = ProductActionTypes.Failed;
  constructor(public payload: string) {}
}
export class ToggleProductImage implements Action {
  readonly type = ProductActionTypes.ToggleProductImage;
  constructor(public payload: boolean) {}
}
export class ReceivedProduct implements Action {
  readonly type = ProductActionTypes.ReceivedProduct;

  constructor(public payload: IProduct[]) {}
}
export type ProductActions = ToggleProductImage | ReceivedProduct | Load | Failed;
