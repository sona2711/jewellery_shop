export const getImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  if (imagePath.startsWith("/")) {
    return imagePath;
  }

  const cleanPath = imagePath
    .replace(/^\.\.\/assets\/images\//, "")
    .replace(/^\.\/assets\/images\//, "")
    .replace(/^assets\/images\//, "")
    .replace(/^\.\.\//, "")
    .replace(/^\.\//, "");

  return `/src/assets/images/${cleanPath}`;
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};
