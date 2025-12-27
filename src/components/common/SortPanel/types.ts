export type SortOption = {
    value: string;
    labelKey: string; 
};


export type SortProps = {
    options: SortOption[];
    value?: string;
    onChange: (value: string) => void;
    placeholderKey?: string; 
  }