app.component('cv-footer', {
    template:
        /*html*/
        `<footer>
            <p>Ce CV est réalisé grâce à <a href=""></a></p>
        </footer>`,
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