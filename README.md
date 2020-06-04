# StopCovidReviews

Un petit script pour récupérer les avis sur l’application StopCovid France.

## Pré-requis

StopCovidReviews repose sur le module [app-store-scraper](https://github.com/facundoolano/app-store-scraper) de [Facundo Olano]. Avant sa première utilisation :

	npm install app-store-scraper
	npm install fs
	
## Usage

Le script `StopCovidInfos.js` permet de récupérer les informations relatives à l’application StopCovid France [pour iPhone](https://apps.apple.com/fr/app/stopcovid-france/id1511279125) : 

	node StopCovidInfos.js
	
Les résultats sont affichés dans le Terminal.

Le script `StopCovidReviews.js` permet de récupérer les avis sur l’application. Pour récupérer la première page des avis : 

	node StopCovidReviews.js
	
Changez la valeur de la clé `page` pour récupérer la deuxième, la troisième… page. Les avis sont enregistrés dans un fichier `reviews.json`.

Changez la valeur de la clé `id` dans les deus fichiers pour récupérer les informations d’une autre application. Ces deux scripts peuvent être facilement adaptés au Play Store en utilisant le module [google-play-scraper](https://github.com/facundoolano/google-play-scraper).

## Licence

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed.fr)