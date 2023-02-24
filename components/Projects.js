app.component('projects', {
    template:
        /*html*/
        `<section class="cv-quang-projects">
        <h2>{{ titlePro }}</h2>
        <article class="project">
            <h4>Occitech</h4>
            <p>Développement d'une application de gestion et de logistique qui vise à organiser et optimiser les
                tournées de livraison de marchandises pour les entreprises de transport et de livraison</p>
            <p>Tâches et réalisations :</p>
            <ul>
                <li>Communication avec une API externe pour recueillir les données et conversion en données
                    intelligibles pour la base de données interne</li>
                <li>Mécanisme d’évènements pour notifier le changement de statut d’une commande et celui d’une
                    livraison </li>
                <li>Mise à jour du système permettant de prendre au moins deux photos d’une marchandise au moment
                    de la réception </li>
                <li>Création d’une instance et environnement pour un nouveau transporteur : création d’un site,
                    mise en place authentification A2F et mise en place de Mailhog et de base de données
                    (préproduction et production) </li>
                <li>Amélioration de l’interface visuelle de l’application (affichage et ajouts des statuts des
                    commandes</li>
                <li>Tests unitaires effectués sur PHPUnit</li>
                <li>Tests mails effectués sur MailHog</li>
                <li>Versionnage effectué sur GitHub</li>
                <li>Intégration continue, tests et déploiements sur Jenkins</li>
                <li>Suivi des logs et erreurs sur Sentry</li>
            </ul>
            <p>Environnement technique :</p>
            <ul>
                <li>Langages : PHP, JavaScript</li>
                <li>Framework/technologie : CakePHP, React.js (modules Mui, Formik)</li>
                <li>BDD/serveur : MySQL, MariaDB, Apache</li>
                <li>Intégration continue : Jenkins, Docker</li>
                <li>Outil/système : Linux Manjaro</li>
            </ul>
        </article>
        <article class="project">
            <h4>Fragrances et Beauté Françaises</h4>
            <p>Création et maintenance de sites e-commerce Shopify</p>
            <ul>
                <li>Mise à jour des pages produits (contenu et images)</li>
                <li>Mise en place d’un ajout automatique d’un produit dans le panier lors des périodes de
                    promotion</li>
                <li>Mise en place de bannières de cookies</li>
                <li>Création d’un nouveau site Shopify de vente : <a href="https://www.earpro.fr/">Ear Pro</a></li>
            </ul>
            <p>Développement d'une application servant de registre RGPD</p>
            <p>Contexte : se mettre en conformité avec le RGPD en établissant un registre et disposer d'une base de
                données supplémentaire repertoriant les traitements de données personnelles</p>
            <ul>
                <li>Affichage d’un registre RGPD sous forme d’un tableau</li>
                <li>Ajout d’un traitement de données personnelles et mise à jour du contenu par voie de fomulaires
                </li>
                <li>Système de création et de gestion de comptes pour gérer le contenu</li>
                <li>Tests unitaires effectués sur PHPUnit</li>
            </ul>
            <p>Développement d'une contrathèque</p>
        </article>
        <h2>Projets personnels</h2>
        <article class="project">
            <h4>Galerie d'art</h4>
            <p>Étant illustrateur et passionné d’art initialement, le projet vise à exposer mes dessins de la même
                manière qu’une galerie d’art ou de musée. Chaque dessin a une histoire et est rapporté à plusieurs
                thèmes qui se rejoignent à celui du voyage (aérien, sous-marin, spatial). Le projet est également un
                prétexte pour approfondir ma formation sur Symfony et React.js</p>
            <p>Tâches et réalisations :</p>
            <ul>
                <li>Maquettes et illustrations en cours de création</li>
                <li>Création et gestion de la base de données</li>
                <li>Utilisation d’un carrousel</li>
                <li>Affichage de l’avancement du dessin (« work in progress »)</li>
                <li>Mise en place système de messagerie entre l’artiste et le client</li>
            </ul>
            <p>Environnement technique :</p>
            <ul>
                <li>Langages : HTML CSS, PHP, JavaScript</li>
                <li>Framework/technologie : Symfony, React.js</li>
                <li>BDD/serveur : MySQL, MariaDB, Apache</li>
                <li>Intégration continue : Jenkins, Docker</li>
                <li>Outil/système : MacOS, Linux ultérieurement</li>
            </ul>
        </article>
        <article class="project">
            <h4>Galerie d'art</h4>
            <p>Étant illustrateur et passionné d’art initialement, le projet vise à exposer mes dessins de la même
                manière qu’une galerie d’art ou de musée. Chaque dessin a une histoire et est rapporté à plusieurs
                thèmes qui se rejoignent à celui du voyage (aérien, sous-marin, spatial). Le projet est également un
                prétexte pour approfondir ma formation sur Symfony et React.js</p>
            <p>Tâches et réalisations :</p>
            <ul>
                <li>Maquettes et illustrations en cours de création</li>
                <li>Création et gestion de la base de données</li>
                <li>Utilisation d’un carrousel</li>
                <li>Affichage de l’avancement du dessin (« work in progress »)</li>
                <li>Mise en place système de messagerie entre l’artiste et le client</li>
            </ul>
            <p>Environnement technique :</p>
            <ul>
                <li>Langages : HTML CSS, PHP, JavaScript</li>
                <li>Framework/technologie : Symfony, React.js</li>
                <li>BDD/serveur : MySQL, MariaDB, Apache</li>
                <li>Intégration continue : Jenkins, Docker</li>
                <li>Outil/système : MacOS, Linux ultérieurement</li>
            </ul>
        </article>
        <article class="project">
            <h4>Vidéoludothèque</h4>
            <p>Étant un passionné de jeux vidéo, le projet vise à avoir une vue d’ensemble de sa vidéoludothèque, la
                progression dans chaque jeu, les statistiques et l’évolution des personnages dont la gestion se fera
                par la casuistique. Le projet est également un prétexte pour approfondir ma formation sur Laravel et
                React.js. </p>
            <p>Tâches et réalisations :</p>
            <ul>
                <li>Maquettes et illustrations en cours de création</li>
                <li>Création et gestion de la base de données</li>
                <li>Affichage de l’avancement du jeu</li>
                <li>Mise en place système de communication avec une API externe pour obtenir des données
                    statistiques </li>
            </ul>
            <p>Environnement technique :</p>
            <ul>
                <li>Langages : HTML CSS, PHP, JavaScript</li>
                <li>Framework/technologie : Laravel, React.js</li>
                <li>BDD/serveur : MySQL, MariaDB, Apache</li>
                <li>Intégration continue : Jenkins, Docker</li>
                <li>Outil/système : MacOS, Linux ultérieurement</li>
            </ul>
        </article>
        </section>`,
    data() {
        return {
            titlePro: "Expériences professionnelles",
            webTitle: "Web",
            web: [
                { name: "Développeur Web", company: "Occitech", town: "Toulouse", date: "11/22 - 02/23" },
                { name: "Développeur Web", company: "Fragrance et Beauté Françaises", town: "Castres", date: "06/20 - 09/22" }
            ],
            legalTitle: "Juridique",
            legal: [
                { name: "Juriste d'affaires", company: "VINCI Energies", town: "Toulouse", date: "03/19 - 07/19" },
                { name: "Juriste", company: "Metis AVOCATS", town: "Toulouse", date: "11/17 - 06/18" },
                { name: "Elève-avocat stagiaire", company: "Me. Agba, Me. Frisch et Me. Nidecker", town: "Toulouse", date: "03/17 - 09/17" },
                { name: "Juriste stagiaire", company: "Pierre Fabre Dermo-Cosmétique", town: "Lavaur", date: "09/16 - 03/17" },
            ]
        }
    }
})