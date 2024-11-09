// utils/loadImage.js
export const loadImage = (filename) => {
  try {
    return require(`../../shared/assets/images/${filename}.jpg`)
  } catch (error) {
    console.error(`Image ${filename} not found.`)
    return null
  }
}
