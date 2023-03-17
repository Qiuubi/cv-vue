app.component('cv-header', {
    template:
        /*html*/
        `<CVNav :name="name" :title="title"></CVNav>`,
    data() {
        return {
            name: "Nguyen Quang",
            title: "Développeur Web"
        }
    },
})