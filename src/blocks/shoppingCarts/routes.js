import React from 'react';

// Building blocks shoppingCarts components
import {
  IndexView as ShoppingCartsIndexView,
  CartWithOrderSummery as CartWithOrderSummeryView,
  EmptyCart as EmptyCartView,
} from 'blocks/shoppingCarts';

const routes = [
  {
    path: '/blocks/shopping-carts',
    renderer: (params = {}) => <ShoppingCartsIndexView {...params} />,
  },
  {
    path: '/blocks/shopping-carts/cart-with-order-summery',
    renderer: (params = {}) => <CartWithOrderSummeryView {...params} />,
  },
  {
    path: '/blocks/shopping-carts/empty-cart',
    renderer: (params = {}) => <EmptyCartView {...params} />,
  },
];

export default routes;
