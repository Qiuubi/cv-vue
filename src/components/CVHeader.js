app.component('cv-header', {
    template:
        /*html*/
        `<CVNav :name="name" :message="message"></CVNav>`,
    data() {
        return {
            name: "Nguyen Quang",
            message: "Développeur Web"
        }
    },
})