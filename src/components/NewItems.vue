<template>
    <article class="Article New_article">
        <router-link class="link" to="/NewItemsPage">
            <p class="header_link">Новинки &rarr;</p>
        </router-link>
        <section class="cards">
            <ul>
                <!-- <ProductCard 
                    v-for="product in allProducts" 
                    v-bind:key="product.id" 
                    :product="product"/> -->
            </ul>
        </section>
    </article>
</template>

<script>
import ProductCard from "@/components/ProductCard"
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters(['allProducts']),
    components: {
        ProductCard,
    },
    methods: mapActions(['fetchProducts']),
    // async mounted(){
    //     this.fetchProducts()
    // }
    
}
</script>

<style scoped>
.link {
    text-decoration: none;
}

@media only screen and (min-width: 480px) {
    .cards {
        /* flex-wrap: nowrap;
        overflow: scroll; */
    }
}
</style>
