app.component('perso-projects', {
    props: {
        persoProjects: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<section class="cv-quang-projects">
        <h2>{{ titlePerso }}</h2>
        <article class="project" v-for="project in persoProjects">
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>
            <p>Tâches et réalisations :</p>
            <ul>
                <li v-for="task in project.tasks">{{ task }}</li>
            </ul>
            <p>Environnement technique :</p>
            <ul>
                <li v-for="tech in project.techs">{{ tech.name }} : {{ tech.content }}</li>
            </ul>
        </article>
        </section>`,
    data() {
        return {
            titlePerso: "Projets personnels",
        }
    }
})