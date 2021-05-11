<template>
    <article class="Article New_article">
        <router-link class="link" to="/news">
            <p class="header_link">Новинки &rarr;</p>
        </router-link>
        <section class="cards">
            <ul>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </ul>
        </section>
    </article>
</template>


<script>
import ProductCard from '@/components/ProductCard'

export default {
    data(){
        return {
           
        }
    },
    components: {
        ProductCard,
    }
}
</script>

<style scoped>
.link{
    text-decoration: none;
}

@media only screen and (min-width : 480px){
    .cards{
        /* flex-wrap: nowrap;
        overflow: scroll; */
    }
}
</style>