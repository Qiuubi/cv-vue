app.component('cv-footer', {
    template:
        /*html*/
        `<footer>
            <p>Ce CV est réalisé grâce à <a href="#">{{ framework }}</a></p>
        </footer>`,
    data() {
        return {
            links: [
                { link: "https://qiuubi.tumblr.com/", name: "Tumblr" },
                { link: "#education", name: "Linkedin" },
                { link: "https://www.instagram.com/qiuubii/", name: "Instagram" },
                { link: "#skills", name: "https://www.facebook.com/QiuubiArt" },
                { link: "#exp", name: "Artstation" },
                { link: "#projects", name: "Pixiv" },
                { link: "#interests", name: "GumRoad" },
                { link: "#interests", name: "Pinterest" }
            ],
            framework: "Vue.js"
        }
    },
})