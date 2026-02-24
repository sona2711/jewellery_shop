export type ProductSliderProps<T> = {
  titleKey?: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  showArrows: boolean
};