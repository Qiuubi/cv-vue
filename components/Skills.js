app.component('skills', {
    template:
        /*html*/
        `<section id="skills" class="cv-quang-skills-tech">
            <h2>{{ title }}</h2>
            <ul>
                <li v-for="skill in skillsList">{{skill.name}} : {{ skill.content }}</li>
            </ul>
        </section>`,
    data() {
        return {
            title: "Compétences techniques",
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