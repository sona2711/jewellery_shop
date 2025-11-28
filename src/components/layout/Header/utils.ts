export const getImageUrl = (image?: string): string => {
  if (!image) {
    return "./src/assets/images/logo/logo_dark.jpg";
  }
  return image;
};
