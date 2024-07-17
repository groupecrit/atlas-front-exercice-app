# Présentation

Ce repository est un projet simpliste qui a pour but d'être utilisé dans le cadre du processus de recrutement de l'équipe Front.

## Lancer le projet

Vous pouvez lancer le projet par le biais de la commande 

`npm start`

## Ce qui est lancé

Cette commande vous lancera : 
* Le projet en local pour que vous puissiez le visionner dans votre navigateur sur le port 9099 (http://localhost:9099 si vous n'avez pas touché à la config)
* Le script au format Module Federation permettant d'utiliser ce projet comme un Micro-Front dans une architecture adaptée.


## Exercice

Dans le cadre de cet entretien on vous demandera de :
* Créer une nouvelle page spécifique aux profils (L'acceuil pourra rester vide)
* Créer la navigation permettant d'aller vers cette page
* Transformer le typage des profils vers celui adapté pour les données retournées par cette URL [https://dummyjson.com/users?select=lastName,firstName,image,address](https://dummyjson.com/users?select=lastName,firstName,image,address)
* Adapter le composant CarteProfil pour afficher toutes les données renvoyées
* Créer la logique permettant d'aller récupérer des users dès l'arrivée sur la nouvelle page
* Sur cette page, afficher les users avec un ensemble de composants CarteProfil et effectuer la pagination (CF la [documentation](https://dummyjson.com/docs))

### Bonus :
* Ajouter le champ birthDate dans le select de l'URL et l'ajouter à l'affichage au format DD MMM YYYY
* Fix les tests cassés
