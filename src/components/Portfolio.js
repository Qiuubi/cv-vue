app.component('Portfolio', {
    props: {
        portfolioTitle: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },
    template:
        /*html*/
        `<section class="cv-portfolio">
            <h2>{{ portfolioTitle.toUpperCase() }}</h2>
                <div v-for="item in items">
                <img class="portfolio-img" :src="'./public/img/portfolio/' + item.img + '.jpg'" />
                    <a :href="item.href" class="portfolio-title">{{item.name}}</a>
                </div>

        </section>`
})