import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import i18n from "./i18n"
import { SnackbarProvider} from 'notistack';
import { I18nextProvider } from 'react-i18next';
import "./style/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SnackbarProvider>
    <I18nextProvider i18n={i18n}>
      <App/>
    </I18nextProvider>
    </SnackbarProvider>
  </React.StrictMode>,
);
