<template>
    <article class="Article Key_article">
        <router-link class="link" to="/keys">
            <p class="header_link">Ключи &rarr;</p>
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
import ProductCard from "@/components/ProductCard"

export default {
    name: 'KeyItems',
    computed: {
        items: function () {
            let res = this.$store.getters.getItemsByType("mc")
                
                if (res === [])
                    return [{id: 0}, {id: 1}, {id: 2}];
                else
                    return [
                        res[0].products[0],
                        res[0].products[1],
                        res[0].products[2],
                        res[0].products[3]
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
