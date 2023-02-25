app.component('cv-main', {
    template:
        /*html*/
        `<main class="cv-main">
            <presentation :name="name"></presentation>
            <profile></profile>
            <skills></skills>
            <experiences></experiences>
            <education></education>
            <projects></projects>
            <hobbies></hobbies>
        </main>`,
    data() {
        return { name: "Nguyen Quang" }
    }
})