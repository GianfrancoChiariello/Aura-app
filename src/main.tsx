import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18n from "./i18n"
import { I18nextProvider } from 'react-i18next';
import "./style/styles.css";
import { NextUIProvider } from "@nextui-org/react";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
