<template>
    <div id="app">
        <div class="container">
            <!-- <Header /> -->
            <router-view />
            <!-- <Footer /> -->
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
    components: {
        Header,
        Footer,
    },
    beforeCreate: function () {
      this.$store.dispatch('getItems');
    }
}
</script>

<style>
@font-face {
    font-family: Inter;
    src: url(static/Inter-VariableFont_slnt,wght.ttf);
    font-style: normal;
    font-weight: normal;
}
@font-face {
    font-family: Inter-BoldItalic;
    src: url(static/Inter-BoldItalic.ttf);
    font-style: italic;
    font-weight: bold;
}
@font-face {
    font-family: Inter-Bold;
    src: url(static/Inter-Bold.ttf);
    font-style: italic;
    font-weight: bold;
}
@font-face {
    font-family: Inter-Light;
    src: url(static/Inter-ExtraLight.ttf);
    font-style: italic;
    font-weight: normal;
}
#app {
    background-color: #0b0b0b;
    background-image: url("assets/img/BG.png");
    color: #fff;
}
a {
    color: #fff;
}

.container {
    font-family: Inter;
    max-width: 1440px;
    margin: 0 auto;
}

.Article {
    width: 95.1388888889%;
    margin: 0 auto;
    margin-bottom: 4.861111111111111%;
    box-sizing: border-box;
    padding: 5.109489051094891%;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
}

.Article p {
    display: block;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;

    margin: 0 0 3.941605839416058% 0;
}

article ul {
    list-style: none;
}

.cards ul {
    display: flex;

    justify-content: space-between;
    flex-flow: row nowrap;
    width: 100%;
    flex-wrap: nowrap;
    overflow: auto;
}

.cards ul{
    width: 100%;
    margin: 0;
}

.Article.Account_article{
    margin-bottom: 80px;
}
@media screen and (max-width: 1440px) {
.cards ul li {
    margin: 0 30px 0 0 ;
}

.cards ul li:last-child {
    margin: 0;
}
}


@media screen and (max-width: 1024px) {
    .Article {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 50px;
        padding: 30px 0;
    }

    .Article .header_link {
        display: block;
        /* margin: 0 0 9.375% 0 ; */
        padding: 0 0 30px 20px;
    }
    .cards ul{
        width: calc(100% - 10px);
        margin: 0 0 0 10px;
    }
    .cards ul li {
        margin: 0 6.125% 0 0 ;
    }

    .Article p{
        margin: 0;
    }
}
</style>
