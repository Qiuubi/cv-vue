app.component('presentation', {
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    template:
        /*html*/
        `<section id="about" class="cv-presentation">
            <h2>{{title}}</h2>
            <p>Je suis {{name}}. {{ description }}</p>
            <div class="container">
                <illustration :images="images"></illustration>
            </div>
            <p>Ce CV utilise Vue.js</p>
            <div class="container">
                <a v-for="link in links" :href="link.url" class="cv-presentation-icon" target="_blank">
                    <i v-bind:class="link.icon"></i>
                </a>
            </div>
        </section>`,
    data() {
        return {
            title: "Présentation",
            description: "Gamer assidu, lecteur de SF passionné, dessinateur en herbe, développeur en maturation",
            links: [
                { url: "https://www.linkedin.com/in/quang-nguyen-8b931a92/", name: 'linkedin', icon: "fa-brands fa-linkedin" },
                { url: "https://github.com/Qiuubi", name: 'github', icon: "fa-brands fa-github" }
            ],
            images: [],
            /* images: [
                { name: "./public/img/presentation1.jpg", altName: "gaming" },
                { name: "./public/img/presentation2.jpg", altName: "lecture" },
                { name: "./public/img/presentation3.jpg", altName: "dessin" },
                { name: "./public/img/presentation4.jpg", altName: "coder" }
            ]*/
        }
    }
    // Ajouter des liens pour les images
})