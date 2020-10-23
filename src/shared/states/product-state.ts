import { AddProduct, DelProduct } from './../actions/product-action';
import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import { ProductStateModel } from './product-state-model';


@State<ProductStateModel>({
  name: 'listProducts',
  defaults: {
    products: []
  }
})
export class ProductState {

  @Selector()
  static getProducts(state: ProductStateModel) {
    return state.products;
  }

  @Selector()
  static getNbProducts(state: ProductStateModel): number {
    return state.products.length;
  }

  @Selector()
  static getFullPriceProducts(state: ProductStateModel): number {
    let price: number = 0;
    state.products.forEach(product => {
      price += product.price;
    });
    let rounding = price.toFixed(2);
    price = Number(rounding)
    return price;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: AddProduct
  ) {
    console.log('here')
    const state = getState();
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de consituer une liste d'élement du tableau
      products: [...state.products, payload],
    });
    console.log(state);
  }

  @Action(DelProduct)
  del(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: DelProduct
  ) {
    const state = getState();
    patchState({
      // supprimer le payload dans users
    //   products: state.products.filter(
    //     // item => item.nom != payload.nom && item.prenom != payload.prenom
    //   )
    // });
    })
  }
}
