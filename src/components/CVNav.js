app.component('CVNav', {
    props: {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        }
    },
    template:
        /*html*/
        `<nav class="nav-cv">
                <h1 id="cv-name">{{name.toUpperCase()}}</h1>
                <h4>{{ title.toUpperCase() }}</h4>
        </nav>`
})