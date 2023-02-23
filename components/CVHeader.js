app.component('cv-header', {
    template:
        /*html*/
        `<nav-links :navLinks="navLinks"></nav-links>`,
    data() {
        return {
            navLinks: [
                { link: "#about", name: "Présentation" },
                { link: "#profile", name: "Profil" },
                { link: "#skills", name: "Compétences" },
                { link: "#exp", name: "Expériences" },
                { link: "#education", name: "Formations" },
                { link: "#projects", name: "Projets" },
                { link: "#interests", name: "Centre d'intérêts" }
            ],
        }
    },
})