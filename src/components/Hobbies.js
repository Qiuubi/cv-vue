app.component('Hobbies', {
    props: {
        interests: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<section class="cv-interests">
            <h2>{{ title.toUpperCase() }}</h2>
            <ul>
                <li v-for="interest in interests">{{ interest }}</li>
            </ul>
        </section>`,
    data() {
        return {
            title: "Centre d'intérêts",
        }
    }
})

