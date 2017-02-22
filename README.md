# Projet big data
Projet ENSG - M2TSI - 2017 

Website inspiré par [Proxyret](https://github.com/rmaziere/Proxyret)

## Livrables

* Ppt : Specifications/Conceptions : Modules/Flux data/Processus (ordre de lancement... etc.) (15 slides max)
* Sources : Depôt Github et manuel d'installations : scripts + bdd ddl
* Fichiers utilisés

## Soutenance

15 min de présentation, 5 min de questions

Adresse IP données : déployer projet sous raspbian

## Sujet 

Objectif : Afficher sur une carte la position des annonces par catégorie dans un rayon de x km autour d'un point GPS donné. 

* Identifier toutes les annonces par catégorie dans un rayon défini à partir d'un point GPS donnée, (curseur voir quelque chose du type [dat gui](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage))  
* Afficher sur une carte un cercle contenant les annonces candidates avec un rayon paramétrable en dynamique  
* Rajouter une barre de critères permettant de sélectionner en temps réel un choix de catégorie qui rafraichit les annonces  
* Afficher sous forme de carte de chaleur sur le périmètre 'france' toutes les annonces, catégories confondues. 

Pour aller plus loin : 

* Voir même sélectionner le type de commerce pour la carte de chaleur  
* Sur zone en fonction nombre d'habitants voir si il y a assez de commerces d'un certain type

Carto : leaflet ou mieux si vous avez, techno : mongodb, php, fichier annonces + fichier catégories	
