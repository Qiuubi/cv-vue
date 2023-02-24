app.component('cv-footer', {
    template:
        /*html*/
        `<nav-links :navLinks="navLinks"></nav-links>`,
    data() {
        return {
            links: [
                { link: "#about", name: "Tumblr" },
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