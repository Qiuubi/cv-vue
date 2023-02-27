app.component('skills', {
    props: {
        skillsList: {
            type: Array,
            required: true,
        }
    },
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
        }
    }
})