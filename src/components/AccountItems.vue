<template>
    <article class="Article Account_article">
        <router-link class="link" to="/accounts">
            <p class="header_link">Аккаунты &rarr;</p>
        </router-link>
        
        <section class="cards">
            <ul>
                <ProductCard 
                    v-for="product in items" 
                    v-bind:key="product.id"
                    :product="product"
                    />
            </ul>
        </section>
    </article>
</template>


<script>
import ProductCard from '@/components/ProductCard'

export default {
    computed: {
        items: function () {
                console.log(this.$store.getters.getItemsByType("account")[0].products[0])
                if (this.$store.getters.getItemsByType("account") === [])
                    return [{id: 0}, {id: 1}, {id: 2}];
                else
                    return [
                        this.$store.getters.getItemsByType("account")[0].products[0],
                        this.$store.getters.getItemsByType("account")[1].products[0],
                        this.$store.getters.getItemsByType("account")[2].products[0],
                        this.$store.getters.getItemsByType("account")[3].products[0]
                    ]
            }
    },
    components: {
        ProductCard,
    },
    
}
</script>

<style scoped>
.link{
    text-decoration: none;
}
</style>