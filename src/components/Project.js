app.component('project', {
    props: {
        proProjects: {
            type: Array,
            required: true,
        },
        persoProjects: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<section class="cv-quang-projects">
            <h2 v-if="proProjects">{{ titlePro.toUpperCase() }}</h2>
            <h2 v-else>{{ titlePerso.toUpperCase() }}</h2>

            <article v-if="proProjects" class="project" v-for="exp in proProjects">
                <h4>{{ exp.title }}</h4>
                <p>{{ exp.description }}</p>
                <p>Tâches et réalisations :</p>
                <ul>
                    <li v-if="exp.tasks.length > 0" v-for="task in exp.tasks" >{{ task }}</li>
                </ul>
                <p>Environnement technique :</p>
                <ul>
                    <li v-for="tech in exp.techs">{{ tech.name }} : {{ tech.content }}</li>
                </ul>
            </article>

            <article v-else class="project" v-for="exp in persoProjects">
                <h4>{{ exp.title }}</h4>
                <p>{{ exp.description }}</p>
                <p>Tâches et réalisations :</p>
                <ul>
                    <li v-if="exp.tasks.length > 0" v-for="task in exp.tasks" >{{ task }}</li>
                </ul>
                <p>Environnement technique :</p>
                <ul>
                    <li v-for="tech in exp.techs">{{ tech.name }} : {{ tech.content }}</li>
                </ul>
            </article>
        </section>`,
    data() {
        return {
            titlePro: "Projets professionnels",
            titlePerso: "Projets personnels"
        }
    }
})
