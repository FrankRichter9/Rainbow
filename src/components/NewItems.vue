<template>
    <article class="Article New_article">
        <router-link class="link" to="/NewItemsPage">
            <p class="header_link">Новинки &rarr;</p>
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
    name: 'NewItems',
    computed: {
        items: function () {
            let res = this.$store.getters.getItemsByType("mc-fullprem")
            console.log(res)
                if (res === [])
                    return [{id: 0}, {id: 1}, {id: 2}];
                else
                    return [
                        res[0].products[0],
                    ]
            }
    },
    components: {
        ProductCard,
    },
    
    
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
