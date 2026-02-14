import type { Product } from '../../../types/product';
import type { ProductFormValues } from './types';

export const calculatePrice = (
  pdp: Product,
  values: ProductFormValues
): number => {
  let price = pdp.basePrice || 0;

  const size = pdp.options?.sizes?.find(s => s.value === values.size);
  const metal = pdp.options?.metals?.find(m => m.value === values.metal);

  if (size?.priceDelta) price += size.priceDelta;
  if (metal?.priceDelta) price += metal.priceDelta;

  return price * Number(values.quantity);
};
