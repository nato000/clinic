import enTranslations from '../config/locales/en/translation.json'
import uaTranslations from '../config/locales/ua/translation.json'

const translations = {
  en: enTranslations,
  ua: uaTranslations,
}

export let currentLanguage = 'ua'

export const setLanguage = (language) => {
  console.log('setLanguage', currentLanguage)
  if (language !== 'ua') {
    currentLanguage = 'en'
  } else {
    currentLanguage = 'ua'
  }
}

// Helper function to get nested translation value by path
const getNestedTranslation = (obj, path) => {
  return path
    .split('.')
    .reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : null),
      obj
    )
}

export const translate = (key, params = {}) => {
  // Get the nested translation based on the current language and key
  let translation =
    getNestedTranslation(translations[currentLanguage], key) || key

  // Replace any placeholders in the translation string with provided parameters
  Object.keys(params).forEach((param) => {
    const regex = new RegExp(`{{${param}}}`, 'g')
    translation = translation.replace(regex, params[param])
  })

  return translation
}

// export const translate = (key, params = {}) => {
//   let translation = translations[currentLanguage][key] || key;
//
//   Object.keys(params).forEach((param) => {
//     const regex = new RegExp(`{{${param}}}`, 'g');
//     translation = translation.replace(regex, params[param]);
//   });
//
//   return translation;
// };
