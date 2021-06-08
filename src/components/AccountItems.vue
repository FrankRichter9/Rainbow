<template>
    <article class="Article Account_article">
        <router-link class="link" to="/accounts">
            <p class="header_link">Аккаунты &rarr;</p>
        </router-link>
        
        <section class="cards">
            <ul>
                <ProductCard 
                    v-show="mainAccounts"
                    v-for="product in mainAccounts" 
                    v-bind:key="product.id"
                    :product="product"
                    />
            </ul>
        </section>
    </article>
</template>


<script>
import ProductCard from '@/components/ProductCard'
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters(['allAccounts', 'mainAccounts']),
    components: {
        ProductCard,
    },
    methods: mapActions(['fetchMainAccounts']),
    async mounted(){
        this.fetchMainAccounts()
    }
    
}
</script>

<style scoped>
.link{
    text-decoration: none;
}
</style>