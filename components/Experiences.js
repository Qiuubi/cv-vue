app.component('experiences', {
    template:
        /*html*/
        `<section id="education" class="cv-quang-educ">
        <h2>{{ title }}</h2>
        <ul>
            <li v-for="diploma in list"> {{ diploma.school }}- {{ diploma.name }} - {{ diploma.date }}</li>
        </ul>
    </section>`,
    data() {
        return {
            title: "Formations et certifications",
            webTitle: "Web",
            list: [
                { school: "3W Academy", name: "Développeur intégrateur en réalisation d’applications web", date: "2020-2022" },
                { school: "EDASOP", name: "CAPA", date: "2016-2017" },
                { school: "UT1 Capitole", name: "Master 2 Droit Privé Fondamental", date: "2013-2014" }
            ]
        }
    }
})