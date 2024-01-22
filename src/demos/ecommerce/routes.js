import React from 'react';

// Demo E-commerce
import {
  IndexView,
  Cart as CartView,
  Checkout as CheckoutView,
  EmptyCart as EmptyCartView,
  Listing as ListingView,
  Promotions as PromotionsView,
  OrderComplete as OrderCompleteView,
  ProductOverview as ProductOverviewView,
} from 'demos/ecommerce/views';

const routes = [
  {
    path: '/demos/ecommerce',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  {
    path: '/demos/ecommerce/cart',
    renderer: (params = {}) => <CartView {...params} />,
  },
  {
    path: '/demos/ecommerce/checkout',
    renderer: (params = {}) => <CheckoutView {...params} />,
  },
  {
    path: '/demos/ecommerce/empty-cart',
    renderer: (params = {}) => <EmptyCartView {...params} />,
  },
  {
    path: '/demos/ecommerce/listing',
    renderer: (params = {}) => <ListingView {...params} />,
  },
  {
    path: '/demos/ecommerce/promotions',
    renderer: (params = {}) => <PromotionsView {...params} />,
  },
  {
    path: '/demos/ecommerce/order-complete',
    renderer: (params = {}) => <OrderCompleteView {...params} />,
  },
  {
    path: '/demos/ecommerce/product-overview',
    renderer: (params = {}) => <ProductOverviewView {...params} />,
  },
];

export default routes;
