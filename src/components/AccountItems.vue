<template>
    <article class="Article Account_article">
        <router-link class="link" to="/accounts">
            <p class="header_link">Аккаунты &rarr;</p>
        </router-link>
        
        <section class="cards">
            <ul>
                <ProductCard v-for="i in 4" v-bind:key="i"/>
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
        
    }
}
</script>

<style scoped>
.link{
    text-decoration: none;
}
</style>