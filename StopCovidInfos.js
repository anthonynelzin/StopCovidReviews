/*

Script pour récupérer les infos d’une application
sur l’App Store, en l’occurence StopCovid,
à l’aide du module npm app-store-scraper.

Anthony Nelzin-Santos
anthony@nelzin.fr

Pré-requis : 

npm install app-store-scraper
npm install fs

Licence : 

CC-O

*/

var store = require('app-store-scraper');

store.app({id: 1511279125}).then(console.log).catch(console.log);