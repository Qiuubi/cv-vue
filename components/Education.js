app.component('education', {
    template:
        /*html*/
        `<section class="cv-quang-work-exp">
        <h2>{{ title }}</h2>
        <h3>{{ webTitle }}</h3>
        <ul>
            <li v-for="job in web">
                <h4>{{job.name}} - {{job.company}} -  {{job.town}} - {{ job.date }}</h4>
            </li>
        </ul>
        <h3>{{legalTitle}}</h3>
        <ul>
            <li v-for="job in legal">
                <h4>{{job.name}} - {{job.company}} -  {{job.town}} - {{ job.date }}</h4>
            </li>
        </ul>
    </section>`,
    data() {
        return {
            title: "Expériences professionnelles",
            webTitle: "Web",
            web: [
                { name: "Développeur Web", company: "Occitech", town: "Toulouse", date: "11/22 - 02/23" },
                { name: "Développeur Web", company: "Fragrance et Beauté Françaises", town: "Castres", date: "06/20 - 09/22" }
            ],
            legalTitle: "Juridique",
            legal: [
                { name: "Juriste d'affaires", company: "VINCI Energies", town: "Toulouse", date: "03/19 - 07/19" },
                { name: "Juriste", company: "Metis AVOCATS", town: "Toulouse", date: "11/17 - 06/18" },
                { name: "Elève-avocat stagiaire", company: "Me. Agba, Me. Frisch et Me. Nidecker", town: "Toulouse", date: "03/17 - 09/17" },
                { name: "Juriste stagiaire", company: "Pierre Fabre Dermo-Cosmétique", town: "Lavaur", date: "09/16 - 03/17" },
            ]
        }
    }
})