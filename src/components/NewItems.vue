<template>
    <article class="Article New_article">
        <router-link class="link" to="/news">
            <p class="header_link">Новинки &rarr;</p>
        </router-link>
        <section class="cards">
            <ul>
                <ProductCard @open="open" v-for="i in 4" v-bind:key="i"/>
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
    },
    methods: {
        open: function(id = 0){
            this.$emit('open', id)
        },
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