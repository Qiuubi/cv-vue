app.component('cv-main', {
    template:
        /*html*/
        `<presentation :name="name"></presentation>
        <profile></profile>
        <skills></skills>
        <experiences></experiences>
        <education></education>
        <projects><projects>`,
    data() {
        return { name: "Nguyen Quang" }
    }
})