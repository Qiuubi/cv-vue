app.component('profile', {
    template:
        /*html*/
        `<section id="profile" class="cv-quang-summ">
            <h2>{{title}}</h2>
            <p>Après avoir exercé l'activité de juriste et suite à une reconversion professionnelle, j'ai développé une passion sur le web et je souhaite exercer l'activité de Développeur Full Stack</p>
            <p>Je demeure membre du bureau de l'Association Française des Juristes d'Entreprise (AFJE) pour des missions relatives à ses activités numériques.</p>
        </section>`,
    data() {
        return {
            title: "Profil",
        }
    }
})