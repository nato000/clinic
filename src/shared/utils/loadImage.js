// utils/loadImage.js
export const loadImage = (filename) => {
  try {
    return new URL(`../assets/images/${filename}.jpg`, import.meta.url).href;
  } catch (error) {
    console.error(`Image ${filename} not found.`)
    return null
  }
}

