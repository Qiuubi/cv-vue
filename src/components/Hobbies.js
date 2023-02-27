app.component('hobbies', {
    props: {
        persoProjects: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<section class="cv-quang-interests">
        <h2>{{ titleInterests }}</h2>
        <ul>
            <li v-for="interest in interests">{{ interest }}</li>
        </ul>
    </section>`,
    data() {
        return {
            titleInterests: "Centre d'intérêts",
            interests: [
                "Le dessin et l’illustration",
                "Les jeux vidéo",
                "L’informatique",
                "Le cinéma et les séries",
                "Le manga et l’anime",
                "Le voyage",
                "L’écriture et littérature",
            ],
        }
    }
})

