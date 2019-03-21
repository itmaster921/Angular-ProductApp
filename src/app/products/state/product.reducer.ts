import { IProduct } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './product.action';

export interface State extends fromRoot.State {
  products: ProductState;
}
export interface ProductState {
  showImage: boolean;
  products: IProduct[];
  productDetails: IProduct;
  error: any;
}
const intialState: ProductState = {
  showImage: false,
  products: [],
  productDetails: {},
  error: {}
};
const getProductsState = createFeatureSelector<ProductState>('products');
export const showImage = createSelector(
  getProductsState,
  state => ({
    products: state.products,
    showImage: state.showImage
  })
);

export const showError = createSelector(
  getProductsState,
  state => state.error
);

export function reducer(
  state = intialState,
  action: ProductActions
): ProductState {

  switch (action.type) {
    case ProductActionTypes.ToggleProductImage:
      return {
        ...state,
        showImage: action.payload
      };
    case ProductActionTypes.ReceivedProduct:
      return {
        ...state,
        error: '',
        products: action.payload
      };
    case ProductActionTypes.Failed:
      return {
        ...state,
        products: [],
        error: action.payload
      };
    default:
      return state;
  }
}
