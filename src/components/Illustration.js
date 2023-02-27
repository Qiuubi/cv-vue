app.component('illustration', {
    props: {
        altName: {
            type: String,
            required: true,
        }
    },
    template:
        /*html*/
        `<div class="cv-presentation-img"></div>`,
    data() {
        return {
            title: "Présentation",
            description: "Gamer assidu, lecteur de SF passionné, dessinateur en herbe, développeur en maturation",
        }
    }
})