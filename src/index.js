import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// trasnlate
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_uz from "./translations/uz/common.json";
import common_ru from "./translations/ru/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "uz", // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    ru: {
      common: common_ru,
    },
    uz: {
      common: common_uz,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
