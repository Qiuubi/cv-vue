app.component('cv-main', {
    template:
        /*html*/
        `<presentation :name="name"></presentation>
        <profile></profile>`,
    data() {
        return { name: "Nguyen Quang" }
    }
})