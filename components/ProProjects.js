app.component('pro-projects', {
    props: {
        proExps: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<section class="cv-quang-projects">
        <h2>{{ titlePro }}</h2>
        <article class="project" v-for="exp in proExps">
            <h4>{{ exp.title }}</h4>
            <p>{{ exp.description }}</p>
            <p>Tâches et réalisations :</p>
            <ul>
                <li v-for="task in exp.tasks">{{ task }}</li>
            </ul>
            <p>Environnement technique :</p>
            <ul>
                <li v-for="tech in exp.techs">{{ tech.name }} : {{ tech.content }}</li>
            </ul>
        </article>
        </section>`,
    data() {
        return {
            titlePro: "Expériences professionnelles",
        }
    }
})