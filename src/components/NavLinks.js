app.component('nav-links', {
    props: {
        navLinks: {
            type: Array,
            required: true
        },
    },
    template:
        /*html*/
        `<nav class="nav-cv">
            <ul >
                <li id="cv-name">{{name}}</li>
                <li class="nav-li" v-for="nav in navLinks"><a :href="nav.link">{{ nav.name }}</a></li>
            </ul>
        </nav>`,
    data() {
        return { name: "Nguyen Quang" }
    }
})