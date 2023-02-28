app.component('illustration', {
    props: {
        images: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<div v-if="images.length > 0" v-for="image in images" class="cv-presentation-img">
            <img src="{image.src}" alt="{image.altName}">
        </div>`,
    data() {
        return {
            title: "Présentation",
            description: "Gamer assidu, lecteur de SF passionné, dessinateur en herbe, développeur en maturation",
        }
    }
})