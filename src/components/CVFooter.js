import linkedinIcon from './../../assets/style/svg/linkedin.svg';
import tumblrIcon from './../../assets/style/svg/tumblr.svg';
import instagramIcon from './../../assets/style/svg/instagram.svg';
import facebookIcon from './../../assets/style/svg/facebook.svg';

app.component('cv-footer', {
    template:
        /*html*/
        `<footer class="cv-footer">
            <p>Ce CV est réalisé grâce à <a href="#">{{ framework }}</a></p>
            <ul>
                <li v-for="link in links"></li>
            </ul>
        </footer>`,
    data() {
        return {
            links: [
                { link: "https://qiuubi.tumblr.com/", name: "Tumblr", icon: tumblrIcon },
                { link: "https://www.linkedin.com/in/quang-nguyen-8b931a92/", name: "Linkedin", icon: linkedinIcon },
                { link: "https://www.instagram.com/qiuubii/", name: "Instagram", icon: instagramIcon },
                { link: "https://www.facebook.com/QiuubiArt", name: "Facebook", icon: facebookIcon },
                /* The following profiles are empty in this moment
                { link: "#exp", name: "Artstation" },
                { link: "#projects", name: "Pixiv" },
                { link: "#interests", name: "GumRoad" },
                { link: "#interests", name: "Pinterest" }
                */
            ],
            framework: "Vue.js"
        }
    },
})