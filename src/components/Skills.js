app.component('Skills', {
    props: {
        skillsList: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<section id="skills" class="cv-skills">
            <h2>{{ title.toUpperCase() }}</h2>
            <ul>
                <li v-for="skill in skillsList">{{ skill.content }}</li>
            </ul>
        </section>`,
    data() {
        return {
            title: "Compétences",
        }
    }
})