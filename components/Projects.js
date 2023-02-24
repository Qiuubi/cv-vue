app.component('projects', {
    template:
        /*html*/
        `<pro-projects :proExps="proExps"></pro-projects>
        <perso-projects :persoProjects="persoProjects"></perso-projects>`,
    data() {
        return {
            proExps: [
                {
                    title: "Occitech",
                    description: "Développement d'une application de gestion et de logistique qui vise à organiser et optimiser les tournées de livraison de marchandises pour les entreprises de transport et de livraison",
                    tasks: [
                        "Communication avec une API externe pour recueillir les données et conversion en données intelligibles pour la base de données interne",
                        "Mécanisme d’évènements pour notifier le changement de statut d’une commande et celui d’une livraison",
                        "Mise à jour du système permettant de prendre au moins deux photos d’une marchandise au moment de la réception",
                        "Création d’une instance et environnement pour un nouveau transporteur : création d’un site, mise en place authentification A2F et mise en place de Mailhog et de base de données (préproduction et production)",
                        "Amélioration de l’interface visuelle de l’application (affichage et ajouts des statuts des commandes",
                        "Tests unitaires effectués sur PHPUnit",
                        "Tests mails effectués sur MailHog",
                        "Versionnage effectué sur GitHub",
                        "Intégration continue, tests et déploiements sur Jenkins",
                        "Suivi des logs et erreurs sur Sentry",
                    ],
                    techs: [
                        { name: "Langages", content: "PHP, JavaScript" },
                        { name: "Frameworks", content: "CakePHP, React JS (modules Mui, Formik)" },
                        { name: "BDD/Serveur", content: "MySQL, MariaDB, Apache" },
                        { name: "Intégration continue", content: "Jenkins, Docker" },
                        { name: "Outils/Système", content: "VSCode, Git, Linux Manjaro" },
                    ]
                },
                {
                    title: "Fragrances et Beauté Françaises",
                    description: "Création et maintenance de sites e-commerce Shopify",
                    tasks: [
                        "Mise à jour des pages produits (contenu et images)",
                        "Mécanisme d’évènements pour notifier le changement de statut d’une commande et celui d’une livraison",
                        "Mise en place de bannières de cookies",
                        'Création d’un nouveau site Shopify de vente : <a href="https://www.earpro.fr/">Ear Pro</a>'
                    ],
                    techs: [
                        { name: "Langages", content: "HTML CSS JavaScript, Ruby, Liquid" },
                        { name: "Frameworks", content: "Shopify" },
                        { name: "Outils/Système", content: "VSCode, Git, MacOS" },
                    ]
                },
                {
                    title: null,
                    description: "Développement d'une application servant de registre RGPD pour cartographier tous les traitements de données personnelles au sein de l'entreprise ",
                    tasks: [
                        "Affichage d’un registre RGPD sous forme d’un tableau",
                        "Ajout d’un traitement de données personnelles et mise à jour du contenu par voie de fomulaires",
                        "Système de création et de gestion de comptes pour gérer le contenu",
                        "Tests unitaires effectués sur PHPUnit"
                    ],
                    techs: [
                        { name: "Langages", content: "HTML CSS JavaScript, PHP" },
                        { name: "Frameworks", content: "Symfony" },
                        { name: "Outils/Système", content: "VSCode, Git, MacOS, MAMP" },
                    ]
                },
                {
                    title: null,
                    description: "Développement d'une contrathèque pour avoir aperçu global en une page sur toutes les relations commerciales entre entreprises",
                    tasks: [
                        "Affichage d’un dashboard pour vue d’ensemble des contrats et leur durée de vie",
                        "Ajout d’un contrat, mise à jour du contenu, notification en cas d’approche du terme",
                        "Système d’authentification pour permettre au juriste ou à un responsable d’ajouter un contrat ou modifier les informations relatives à son contenu",
                        "Tests unitaires effectués sur PHPUnit"
                    ],
                    techs: [
                        { name: "Langages", content: "HTML CSS JavaScript, PHP" },
                        { name: "Frameworks", content: "Symfony" },
                        { name: "Outils/Système", content: "VSCode, Git, MacOS, MAMP" },
                    ]
                },
            ],
            persoProjects: [
                {
                    title: "Galerie d'art",
                    description: "Étant illustrateur et passionné d’art initialement, le projet vise à exposer mes dessins de la même manière qu’une galerie d’art ou de musée.Chaque dessin a une histoire et est rapporté à plusieurs thèmes qui se rejoignent à celui du voyage(aérien, sous- marin, spatial).Le projet est également un prétexte pour approfondir ma formation sur Symfony et React.js",
                    tasks: [
                        "Maquettes et illustrations en cours de création",
                        "Création et gestion de la base de données",
                        "Utilisation d’un carrousel",
                        "Affichage de l’avancement du dessin (« work in progress »)",
                        "Mise en place système de messagerie entre l’artiste et le client"
                    ],
                    techs: [
                        { name: "Langages", content: "HTML CSS, PHP, JavaScript" },
                        { name: "Frameworks", content: "Symfony, React.js<" },
                        { name: "BDD/Serveur", content: "MySQL, MariaDB, Apache" },
                        { name: "Intégration continue", content: "Jenkins, Docker" },
                        { name: "Outils/Système", content: "VSCode, Git, MacOS, Linux ultérieurement" },
                    ]
                },
                {
                    title: "Vidéoludothèque",
                    description: "Étant un passionné de jeux vidéo, le projet vise à avoir une vue d’ensemble de sa vidéoludothèque, la progression dans chaque jeu, les statistiques et l’évolution des personnages dont la gestion se fera par la casuistique.Le projet est également un prétexte pour approfondir ma formation sur Laravel et React.js. ",
                    tasks: [
                        "Maquettes et illustrations en cours de création",
                        "Création et gestion de la base de données",
                        "Affichage de l’avancement du jeu",
                        "Mise en place système de communication avec une API externe pour obtenir des données statistiques",
                    ],
                    techs: [
                        { name: "Langages", content: "HTML CSS, PHP, JavaScript" },
                        { name: "Frameworks", content: "Laravel, React.js<" },
                        { name: "BDD/Serveur", content: "MySQL, MariaDB, Apache" },
                        { name: "Intégration continue", content: "Jenkins, Docker" },
                        { name: "Outils/Système", content: "VSCode, Git, MacOS, Linux ultérieurement" },
                    ]
                },
            ],
        }
    }
})