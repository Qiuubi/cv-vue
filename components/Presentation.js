app.component('presentation', {
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    template:
        /*html*/
        `<section id="about" class="cv-quang-name-details">
            <h2>{{title}}</h2>
            <p>Je suis {{name}}. Gamer assidu, lecteur de SF passionné, développeur en maturation</p>
            <p>Ce CV utilise Vue.js</p>
        </section>`,
    data() {
        return {
            title: "Présentation"
        }
    }
})