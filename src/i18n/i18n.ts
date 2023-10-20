import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./translations/en.json";
import he from "./translations/he.json";
import ch from "./translations/ch.json";
import es from "./translations/es.json";
import fr from "./translations/fr.json";
import de from "./translations/de.json";
import pt from "./translations/pt.json";

const resources = {
  en,
  he,
  ch,
  es,
  fr,
  de,
  pt
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    defaultNS: "common",
    fallbackLng: "en",
  });

export default i18n;