import React from 'react';

// Building blocks productPickers components
import {
  IndexView as ProductPickersIndexView,
  ColorPicker as ColorPickerView,
  SizePicker as SizePickerView,
  QuantityPicker as QuantityPickerView,
} from 'blocks/productPickers';

const routes = [
  {
    path: '/blocks/product-pickers',
    renderer: (params = {}) => <ProductPickersIndexView {...params} />,
  },
  {
    path: '/blocks/product-pickers/color-picker',
    renderer: (params = {}) => <ColorPickerView {...params} />,
  },
  {
    path: '/blocks/product-pickers/size-picker',
    renderer: (params = {}) => <SizePickerView {...params} />,
  },
  {
    path: '/blocks/product-pickers/quantity-picker',
    renderer: (params = {}) => <QuantityPickerView {...params} />,
  },
];

export default routes;
