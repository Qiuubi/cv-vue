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
            <p>Je suis {{name}}. {{ description }}</p>
            <p>Ce CV utilise Vue.js</p>
        </section>`,
    data() {
        return {
            title: "Présentation",
            description: "Gamer assidu, lecteur de SF passionné, dessinateur en herbe, développeur en maturation"
        }
    }
})