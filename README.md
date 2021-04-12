# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub Page
Pagina GitHub del progetto [React Weather Web App](https://github.com/marco-faltoni/api-weather-app)

## Versione Live
Per poter visionare il progetto live, basta cliccare su questo link [React Weather Web App](https://reactopenweather-app.netlify.app/)

## Come eseguire il progetto in locale

Scaricare la repository su una cartella a scelta del prprio PC.
Aprire la repo da terminale con il proprio IDE preferito.

per installare le dipendenze (assicurarsi di aver installato NodeJS)
### `npm install`

per far partire il progetto in locale
### `npm start`

ATTENZIONE: per poter far funzionare la web-app, assicurarsi di recpurare le API Keys rispettivamente dal servizio di OpenWeather(usato per il recupero dati meteo) e da quello di Algolia Places(usato per la ricerca dell'utente), e aggiungerle al file .env (da creare dentro la repo) scrivendo le seguenti chiavi: 
- REACT_APP_WEATHER_API=AGGIUNGERE_KEY
- REACT_APP_ALGOLIA_API_ID=AGGIUNGERE_KEY
- REACT_APP_ALGOLIA_API_KEY=AGGIUNGERE_KEY


## Funzionalità Obbligatorie sviluppate

- L’applicazione è basata su Create React App, seguendo le best practice di React.

- L’applicazione al suo primo caricamento richiede al browser la posizione (latitudine e longitudine) dell’utente.

- L’applicazione si interfaccia con le API free di OpenWeather (a cui viene richiesta una API Key).

- L’applicazione è completamente in italiano e appare graficamente identica ai mockup allegati.

- L’applicazione è responsive desktop.

- L’applicazione offre delle animazioni fluide al caricamento e al cambio pagina.

## Funzionalità Aggiuntive sviluppate

- L’applicazione ha una versione mobile della UI.

- L’applicazione permette la selezione di una città specifica tramite input testuale
con autocomplete.

- L’applicazione utilizza gli Hooks di React (useState, useEffect ecc).

- L’applicazione utilizza React Redux per la gestione delle chiamate alle API e il mantenimento dello stato.

- L’applicazione è sviluppata su due pagine e utilizza React Router per la navigazione.
