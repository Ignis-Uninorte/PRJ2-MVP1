export const importImage = (imgName: string): string => {
    return new URL(`../assets/${imgName}`, import.meta.url).href;
  };