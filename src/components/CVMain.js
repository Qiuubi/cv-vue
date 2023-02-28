app.component('cv-main', {
    template:
        /*html*/
        `<main class="cv-main">
            <presentation :name="name"></presentation>
            <profile></profile>
            <div class="container">
                <skills :skillsList="skillsList"></skills>
                <education></education>
            </div>
            <experiences></experiences>
            <projects></projects>
            <hobbies></hobbies>
        </main>`,
    data() {
        return {
            name: "Nguyen Quang",
            skillsList: [
                { name: "Methodologies", content: "Cycle en V, Agile" },
                { name: "Langages", content: "HTML CSS, PHP, JavaScript" },
                { name: "Frameworks", content: "CakePHP, Symfony, React JS" },
                { name: "BDD", content: "MySQL, MariaDB" },
                { name: "Intégration continue", content: "Jenkins, Docker" },
                { name: "Serveur", content: "Apache" },
                { name: "Système", content: "MacOS, Linux Manjaro" },
                { name: "Outils", content: "VSCode, PHPStorm, Git" },
            ],
        }
    }
})

