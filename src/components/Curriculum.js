app.component('Curriculum', {
    template:
        /*html*/
        `<cv-header>
        <p>Ce CV est réalisé grâce à <a href="#">{{ framework }}</a></p>
        </cv-header>
        <main class="cv-vue">
            <CVAside></CVAside>
            <cv-main></cv-main>
        </main>
        <cv-footer></cv-footer>`,
    data() {
        return {

        }
    },
})