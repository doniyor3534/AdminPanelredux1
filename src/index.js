import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import App from './App';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';



i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      supportedLngs:['en','ru','uz','ar'],
      folbackLng:'en',
      detection:{
        order: ['htmlTag', 'cookie', 'localStorage', 'subdomain',  'path'],
        caches:['cookie']
      },
      backend:{
        loadPath: '/assets/locales/{{lng}}/translation.json',
      },
      react:{useSuspense:false}
    });

    // function App() {
    //   const { t } = useTranslation();
    
    //   return <h2>{t('Welcome to React')}</h2>;
    // }
    



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

