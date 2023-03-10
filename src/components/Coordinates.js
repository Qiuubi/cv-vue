app.component('Coordinates', {
    props: {
        coordinates: {
            type: Array,
            required: true,
        },
        links: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<section class="cv-coordinates">
            <h2>{{ title.toUpperCase() }}</h2>
            <ul>
                <li v-for="coordinate in coordinates">{{coordinate}}</li>
            </ul>
            <ul>
                <li v-for="link in links">
                    <a v-bind:href="link.href">
                        <!--<i class="link.icon"></i>--> {{link.name}}
                    </a>
                </li>
            </ul>
        </section>`,
    data() {
        return {
            title: "Coordonées",
        }
    },
})