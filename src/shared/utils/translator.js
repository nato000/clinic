import enTranslations from '../config/locales/en/translation.json';
import uaTranslations from '../config/locales/ua/translation.json';

const translations = {
  en: enTranslations,
  ua: uaTranslations,
};

let currentLanguage = 'ua';

export const setLanguage = (language) => {
  console.log("setLanguage", currentLanguage);
  if (language !== 'ua') {
    currentLanguage = 'en';
  } else {
    currentLanguage = 'ua';
  }
};

export const translate = (key, params = {}) => {
  let translation = translations[currentLanguage][key] || key;

  Object.keys(params).forEach((param) => {
    const regex = new RegExp(`{{${param}}}`, 'g');
    translation = translation.replace(regex, params[param]);
  });

  return translation;
};
