import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


import en from './en.json';
import ru from './ru.json';
import am from './am.json';


i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        ru: {
            translation: ru,
        },
        am: {
            translation: am,
        }
    },
    lng: 'am',
    fallbackLng: 'am',
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
    },
})
