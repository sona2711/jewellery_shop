import type { PDPConfig, ProductFormValues } from './types';

export const calculatePrice = (
  pdp: PDPConfig,
  values: ProductFormValues
): number => {
  let price = pdp.basePrice;

  const size = pdp.sizes?.find(s => s.value === values.size);
  const metal = pdp.metals?.find(m => m.value === values.metal);

  if (size?.priceDelta) price += size.priceDelta;
  if (metal?.priceDelta) price += metal.priceDelta;

  return price * Number(values.quantity);
};
