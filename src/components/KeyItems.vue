<template>
    <article class="Article Key_article">
        <p class="header_link">Ключи &rarr;</p>
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