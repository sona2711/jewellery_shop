export const getImageUrl = (imagePath: string): string => {
  // Validate input
  if (!imagePath || typeof imagePath !== "string") {
    console.warn("Invalid image path provided:", imagePath);
    return "";
  }

  // Return full URLs as-is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // Return absolute paths (public folder) as-is
  if (imagePath.startsWith("/")) {
    return imagePath;
  }

  // Clean up relative paths to extract just the filename/path
  // Handle multiple ../ prefixes and various path formats
  let cleanPath = imagePath;

  // Remove any number of ../ prefixes followed by assets/images/
  cleanPath = cleanPath.replace(/^(\.\.\/)+assets\/images\//, "");
  // Remove ./assets/images/ prefix
  cleanPath = cleanPath.replace(/^\.\/assets\/images\//, "");
  // Remove assets/images/ prefix (if no ../ before it)
  cleanPath = cleanPath.replace(/^assets\/images\//, "");
  // Remove any remaining ../ prefixes
  cleanPath = cleanPath.replace(/^(\.\.\/)+/, "");
  // Remove any remaining ./ prefix
  cleanPath = cleanPath.replace(/^\.\//, "");

  // Validate cleanPath
  if (!cleanPath) {
    console.warn("Could not extract clean path from:", imagePath);
    return "";
  }

  // Use Vite's import.meta.url to properly resolve asset paths
  // Construct a relative path from this file to the assets folder
  try {
    // Debug logging
    console.log("getImageUrl - imagePath:", imagePath);
    console.log("getImageUrl - cleanPath:", cleanPath);

    // This creates a proper URL that Vite can resolve
    // The path is relative to the current file location
    const relativePath = `../../assets/images/${cleanPath}`;
    console.log("getImageUrl - relativePath:", relativePath);
    const url = new URL(relativePath, import.meta.url);
    console.log("getImageUrl - url.href:", url.href);
    console.log("getImageUrl - url.protocol:", url.protocol);
    console.log("getImageUrl - url.pathname:", url.pathname);

    // In Vite dev mode, this should return a proper dev server URL
    // If it's a file:// URL, we need to extract the path correctly
    if (url.protocol === "file:") {
      // Extract pathname and normalize for web
      let pathname = url.pathname;

      // On Windows, remove the drive letter (e.g., /C:/)
      pathname = pathname.replace(/^\/[A-Z]:/, "");

      // Normalize backslashes to forward slashes
      pathname = pathname.replace(/\\/g, "/");

      // Extract the path relative to the project root
      // Find the position of /src/ in the path
      const srcIndex = pathname.indexOf("/src/");
      if (srcIndex !== -1) {
        // Return the path from /src/ onwards, which Vite can serve
        const result = pathname.substring(srcIndex);
        // Ensure the result is valid
        if (result && !result.includes("undefined")) {
          return result;
        }
      }

      // Fallback: try to construct a valid path
      const fallbackPath = `/src/assets/images/${cleanPath}`;
      if (fallbackPath && !fallbackPath.includes("undefined")) {
        return fallbackPath;
      }
    }

    // For http/https URLs (Vite dev server)
    if (url.protocol === "http:" || url.protocol === "https:") {
      // Extract just the pathname from the URL
      const pathname = url.pathname;
      // Ensure it's valid and doesn't contain undefined
      if (pathname && !pathname.includes("undefined")) {
        return pathname;
      }
    }

    // If we get here, something went wrong
    console.warn("Unexpected URL format:", url.href);
    // Return a simple fallback path
    return `/src/assets/images/${cleanPath}`;
  } catch (error) {
    // Fallback: try constructing a path that works with Vite's dev server
    console.warn(`Failed to resolve image path: ${imagePath}`, error);
    // Return a path relative to the project root (Vite dev server handles this)
    const fallbackPath = `/src/assets/images/${cleanPath}`;
    return fallbackPath && !fallbackPath.includes("undefined")
      ? fallbackPath
      : "";
  }
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};


