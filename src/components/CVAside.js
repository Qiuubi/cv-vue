app.component('CVAside', {
    template:
        /*html*/
        `<aside class="cv-aside">
            <Coordinates :coordinates="coordinates" :links="links"></Coordinates>
            <Skills :skillsList="skillsList"></Skills>
            <Hobbies :interests="interests"></Hobbies>
            <Portfolio :items="items" :portfolioTitle="portfolioTitle"></Portfolio>
        </aside>`,
    data() {
        return {
            coordinates: [
                "Toulouse, France", "quang.nguyen.fr@gmail.com"
            ],
            links: [
                { name: "Linkedin", href: "https://www.linkedin.com/in/quang-nguyen-8b931a92/", icon: "fa-brands fa-linkedin" },
                { name: "Github", href: "https://github.com/Qiuubi", icon: "fa-brands fa-square-github" },
                { name: "Facebook", href: "https://www.facebook.com/QiuubiArt", icon: "fa-brands fa-square-facebook" },
            ],
            skillsList: [
                { name: "Methodologies", content: "Cycle en V, Agile" },
                { name: "Langages", content: "HTML CSS, PHP, JavaScript" },
                { name: "Frameworks", content: "CakePHP, Symfony, React JS" },
                { name: "BDD", content: "MySQL, MariaDB" },
                { name: "Intégration continue", content: "Jenkins, Docker" },
                { name: "Serveur", content: "Apache" },
                { name: "Système", content: "MacOS, Linux Manjaro" },
                { name: "Outils", content: "VSCode, PHPStorm, Git" }
            ],
            interests: [
                "Le dessin et l’illustration",
                "Les jeux vidéo",
                "L’informatique",
                "Le cinéma et les séries",
                "Le manga et l’anime",
                "Le voyage",
                "L’écriture et littérature",
            ],
            portfolioTitle: "Portfolio",
            items: [
                { name: "Essence Des Notes", img: "essence-des-notes", href: "https://www.lessencedesnotes.com/", tech: "Shopify" },
                { name: "White Leaf", img: "white-leaf", href: "https://whiteleaf-care.com/", tech: "Shopify" },
                { name: "Ear Pro", img: "earpro", href: "https://www.earpro.fr/", tech: "Shopify" },
            ]
        }
    },
})