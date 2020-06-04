/*

Script pour récupérer les avis d’une application
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
var fs = require('fs');

let reviews = store.reviews({
  id: '1511279125', /* StopCovid France */
  country: 'fr',
  sort: store.sort.RECENT,
  page: 1 /* Page 1 à 10 */
}).then(response => {
    const json = JSON.stringify(response);
    fs.writeFile('reviews.json', json, 'utf8', function(err) {
    	if (err) throw err;
    	console.log('Avis enregistrés');
    });
});

