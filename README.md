GoaTTeam : 
=================

-   CHAMPENOIS Elric

-   DUHEM Alexandre

-   GAMBIER Maxime


-------------


Rapport de projet
=================

Réalisation d'un site web de quiz en JavaScript
===============================================

TABLE DES MATIÈRES
==================

[Présentation de l'équipe :  2](https://docs.google.com/document/d/1z-Q17f2c2lPBo8iJcgTfH22fLBVnBez6W0n7cOLrRgs/edit#heading=h.gxet57v934ke)

[Présentation de l'application :  2](https://docs.google.com/document/d/1z-Q17f2c2lPBo8iJcgTfH22fLBVnBez6W0n7cOLrRgs/edit#heading=h.qa43qzjvb5i5)

[Présentation des outils utilisés  :  3](https://docs.google.com/document/d/1z-Q17f2c2lPBo8iJcgTfH22fLBVnBez6W0n7cOLrRgs/edit#heading=h.6c620lt09lth)

[Planning et répartition des tâches :  3](https://docs.google.com/document/d/1z-Q17f2c2lPBo8iJcgTfH22fLBVnBez6W0n7cOLrRgs/edit#heading=h.6gebuw4yymsm)

[Planning effectif et analyse des écarts :  4](https://docs.google.com/document/d/1z-Q17f2c2lPBo8iJcgTfH22fLBVnBez6W0n7cOLrRgs/edit#heading=h.20ecfvcamxpw)

[Fonctionnalités obligatoires et réalisés :  6](https://docs.google.com/document/d/1z-Q17f2c2lPBo8iJcgTfH22fLBVnBez6W0n7cOLrRgs/edit#heading=h.eekw3ut0pazk)

[Mise en place :  7](https://docs.google.com/document/d/1z-Q17f2c2lPBo8iJcgTfH22fLBVnBez6W0n7cOLrRgs/edit#heading=h.lxhb6xlkesft)

[Bilan :  8](https://docs.google.com/document/d/1z-Q17f2c2lPBo8iJcgTfH22fLBVnBez6W0n7cOLrRgs/edit#heading=h.loyxzywmvfhg)

Présentation de l'équipe : 
===========================

Afin de réaliser ce projet, notre équipe a été composée de trois étudiants de la Licence Professionnelle :  Développement Informatique et Outils Collaboratifs :

-   Alexandre Duhem

-   Elric Champenois

-   Maxime Gambier

Présentation de l'application : 
================================

Nom de code : GOATTEAM APP 

GOATTEAM APP est le nom de l'application que nous devions réaliser, le but de cette dernière étant de pouvoir jouer et créer des quiz très facilement à travers un site web.

Présentation des outils utilisés  :
===================================

Afin de réaliser ce projet, nous avons utilisé ReactJS pour la partie front (la partie client de l'application) et Express pour le back (la partie serveur (API REST)) permettant de faire des opérations sur la base de données MYSQL. 

Nous avons utilisé Webstorm comme IDE (environnement de développement « intégré » .) conçu spécialement pour les projets web. En effet il peut s'adapter à tout type de technologies. Nous avons utilisé les packages npm suivants : 

-   mysql

-   moch

-   chai

-   axios

-   react-boostrap

Planning et répartition des tâches :
====================================

Notre objectif pour le premier jour de développement était de finaliser la phase 1. C'est-à- dire :

-   Créer la base de données avec quelques de données de base (au moins 2 quiz et au moins 3 questions par quiz) : Champenois Elric,Maxime Gambier,Alexandre Duhem

-   Afficher la liste de tous les quiz (avec l'image associée) : Maxime Gambier,Champenois Elric

-   Afficher la liste des quiz en fonction d'un mot-clé : Alexandre Duhem

-   Mise en place des routes (router.js) dans le back-end : Elric Champenois

Le deuxième jour a eu pour but de finir la phase 2. C'est à dire:

-   Intégrer dans vos données au moins une question comportant une vidéo, et l'afficher sur le frontend : Alexandre Duhem, Maxime Gambier

-   Intégrer dans vos données au moins une question dont les propositions sont des images, et les afficher sur le frontend : Alexandre Duhem, Maxime Gambier

-   Permettre de jouer à un quiz et afficher la somme des points obtenus au fur et à mesure que le joueur répond aux questions : Alexandre Duhem

-   Tests : Champenois Elric,Maxime Gambier,Alexandre Duhem

Le troisième jour

-   Tests : Alexandre Duhem

-   Permettre de créer/modifier/supprimer des quiz : Champenois Elric,Maxime Gambier

Planning effectif et analyse des écarts :
=========================================

![](https://lh5.googleusercontent.com/r_ZnI0FSzu2d4wiKnhNaJEUZaOMKh2DY2hl-EVW2ROObmKkmk-dJJAm0jobElIyWMR9khoK8mNmZiWF38Fyp2WOfAZDWwFoPnygfnp27zJIW7qQDkxH8-Q6i69VBpMoMtkWsD0ZZ)

Ce planning n'a pas pu être respecté pour deux principales raisons :

-   Certains d'entre nous avaient des soucis de connexion/ordinateur/voire les deux ce qui n'a pas facilité le travail. A l'IUT, le travail aurait été plus facile.

-   Nous n'avions pas les corrections des TPS ainsi que nos fichiers car ils étaient sur le serveur de l'IUT ce qui n'a pas facilité les choses car certains d'entre nous avaient du mal à se souvenir de comment faire certaines choses en React notamment.

Fonctionnalités obligatoires et réalisés :
==========================================

![](https://lh5.googleusercontent.com/43HNPlew6_FkicqMpuoV5OXy3vFG4G98pyCAjAMB-Scc-p-xW-10QgQFv9VhZ2lScsNXmhj1WsxS5JJl78Ju66nM1vspnMSCDqCb7G9llEw83Tv1nJxqYzTWhdA3uaeYcA9ZA6Ia)

Mise en place :
===============\
Afin de lancer correctement l'application il faudra importer dans MySQL, le fichier bddquiz.sql.

Puis modifier le fichier router.js and test.js

![](https://lh5.googleusercontent.com/ARSiwj_oykThfpAEf_gR_ntM8_pSZUy9D8ImUAwwH5R29ehbnqH9xlwUmU0eE3JCcgXBeY3YZIF3Cp1efFRuYHeGC7Zopd3bdsLvt7NWy8-bYFHn8hjTE5hZi9co_wJrpBZjxNbd)

Pour mettre les identifiants de connexion et le nom de la base de données utilisé.

Ensuite il faudra faire un npm install sur la partie front et back,

une fois cela fait il faudra faire un npm start sur la partie back puis sur la partie front ( ou inversement ).

une fois que le front communiquera avec le back vous pourrez utiliser l'application.

Bilan :
=======

Elric : Pour ma part, le projet n'a pas été un des plus marquant, nous avons eu pas mal de soucis a cause de la connexion/matériel ce qui nous retardé sur le développement de l'application néanmoins le projet m'a permis d'appliquer une nouvelle fois les frameworks de JavaScript ,et de revoir certaines fonctionnalitées de ces derniers.

Maxime : Le projet en globalité s'est très bien déroulé, malgré le contexte actuel et le travail chez soi. Il fut parfois difficile d'être bien coordonné avec les différents soucis d'un travail chez soi (connexion notamment), mais dans l'ensemble, nous étions bien coordonnées, et avons bien travaillé ensemble.

Quasiment tout ce qui est demandé est opérationnel, mais il manquait peut-être un peu de temps, et une nouvelle fois, le travail chez soi, et pas spécialement dans les bonnes conditions ont accusé du retard non négligeable.

Alexandre : Pour ma part, ce projet m'a permis de progresser en React bien plus qu'en cours traditionnel. Cependant, la quarantaine instaurée dans le pays à dégrader le projet pour ma part. En effet disposant d'une connexion et d'un pc très moyen, j'ai rencontré de nombreuses difficultés au cours de ces trois jours de développement. Enfin je suis content d'avoir pu réaliser le projet avec Maxime et Elric car l'ambiance et l'entraide étaient au rendez-vous.