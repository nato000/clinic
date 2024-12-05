// utils/loadImage.js
export const loadImage = (filename) => {
  try {
    return new URL(`../assets/images/${filename}.jpg`, import.meta.url).href
  } catch (error) {
    console.error(`Image ${filename} not found.`)
    return null
  }
}
export const loadImagePng = (filename) => {
  try {
    return new URL(`../assets/images/${filename}.png`, import.meta.url).href
  } catch (error) {
    console.error(`Image ${filename} not found.`)
    return null
  }
}

export const loadIcon = (filename) => {
  try {
    return new URL(`../assets/icons/${filename}.svg`, import.meta.url).href
  } catch (error) {
    console.error(`Icon ${filename} not found.`)
    return null
  }
}
