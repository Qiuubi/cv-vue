app.component('experiences', {
    template:
        /*html*/
        `<section class="cv-quang-work-exp">
            <h2>{{ title.toUpperCase() }}</h2>
            <h3>{{ webTitle }}</h3>
            <ul>
                <li v-for="job in web">
                    <span>{{ job.date }}</span> - {{job.name}} - {{job.company}} - {{job.town}}  
                </li>
            </ul>
            <h3>{{legalTitle}}</h3>
            <ul>
                <li v-for="job in legal">
                <span>{{ job.date }}</span> - {{job.name}} - {{job.company}} - {{job.town}} 
                </li>
            </ul>
        </section>`,
    data() {
        return {
            title: "Expériences professionnelles",
            webTitle: "Web",
            web: [
                { name: "Développeur Web", company: "Occitech", town: "Toulouse", date: "Nov 2022 -  Févr. 2023" },
                { name: "Développeur Web", company: "Fragrance et Beauté Françaises", town: "Castres", date: "Sept. 2020 - Sept. 2022" }
            ],
            legalTitle: "Juridique",
            legal: [
                { name: "Juriste d'affaires", company: "VINCI Energies", town: "Toulouse", date: "Mars 2019 - Juill. 2019" },
                { name: "Juriste", company: "Metis AVOCATS", town: "Toulouse", date: "Nov 2017 - Juin 2018" },
                { name: "Elève-avocat stagiaire", company: "Me. Agba, Me. Frisch et Me. Nidecker", town: "Toulouse", date: "Mars 2017 - Sept. 2017" },
                { name: "Juriste stagiaire", company: "Pierre Fabre Dermo-Cosmétique", town: "Lavaur", date: "Sept. 2016 - Mars 2017" },
            ],
            styles: {
                paddingLeft: '10px'
            }
        }
    }
})