<template>
    <article class="Article Account_article">
        <p class="header_link">Аккаунты &rarr;</p>
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