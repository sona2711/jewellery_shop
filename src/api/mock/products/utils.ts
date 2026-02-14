export const randomFrom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const randomPrice = ([min, max]: [number, number]) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const generateSKU = (collection: string, index: number) =>
  `${collection.slice(0, 3).toUpperCase()}-${index + 1}`;