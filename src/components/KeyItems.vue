<template>
    <article class="Article Key_article">
        <p class="header_link">Ключи &rarr;</p>
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