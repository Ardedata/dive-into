# GIT + Mysql = Dolt

<img align="center" height="300" src="./dolt_hi.svg"/>


https://github.com/dolthub/dolt

## Table des matières

* [101](#101)
* [Usecases](#usecases)
* [DoltHub](#dolthub)
* [Pros & Cons](#pros-cons)

On se demande souvent est-ce qu'il existe une façon simple de versionner les schemas/data de nos bases ? 

Dolt apporte une réponse en combinant à la fois git et mysql.

## 101

Dolt est une base de donnée open source ou on peut faire des fork, clone, branch, merge, push et pull avec la data... Un peu comme un git repository !

Depuis la documentation, Dolt c'est : 

` The Dolt database provides a command line interface and a MySQL compatible Server for reading and writing data `

Si vous êtes intéressé à tester la solution, on vous recommande leur quick start : https://docs.dolthub.com/getting-started/installation

## Usecases

Les usescases qu'on a retenu :
------------------------------

+ **Data release:** Avoir les mêmes pratiques dev avec la data, branch, revue puis merge.

Ca permet d'améliorer la qualité de nos données, le partage, facilite le versionning de nos schemas/datas et donc le restore à n'importe quel état.

+ **Giving branch & merge to customers**

Isoler la data sur des branches pour faire tester de nouvelles feature sans impacter les données de prods

+ **Data provenance & audit:**

Tracker les changements, savoir qui a fait, quel était le message du commit, quelle était la valeur précédente.



Pour les curieux :
------------------

+ https://www.dolthub.com/blog/2021-03-09-dolt-use-cases-in-the-wild/
+ https://www.dolthub.com/blog/2020-03-30-dolt-use-cases/


## DoltHub

C'est un système de contrôle de version (cad : github, gitlab...)  pour la data.

On va y retrouver des previews, on peut y créer des catalogues de requêtes pré-générée pour faciliter la visibilité et le partage de la data.

Voir exemple : https://www.dolthub.com/repositories/dolthub/corona-virus/query/master?q=select+*+from+current&active=Query+Catalog

## Pros & Cons

✅ Pros:
--------

+ 📸 Snapshots: tous les commits sont un snapshot de la base 
+ Time travel: requêter une ancienne version
+ Rollbacks: `dolt reset --hard HEAD~3` pour undone les 3 derniers commits.
+ Une documentation claire, avec des blogs intéressants
+ Avoir les pratiques de dev sur sa base

❌ Cons:
--------

+ No Sharding 
+ Performances 
+ Solution jeune

Performances : https://docs.dolthub.com/reference/characteristics#benchmark-data

Roadmap:
========

+ Première release stable 1.0 prévue mi année 2021.
+ Sharding (long term)
+ Read-Only replicas
+ Améliorer les performances, pour arriver à 2|3 fois inférieur à celle de Mysql

L'équipe:
=========

* Un gros background technique :  https://www.dolthub.com/team

