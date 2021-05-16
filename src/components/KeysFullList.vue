<template>
    <article class="Article Key_article">
        <p class="header_link">Ключи &rarr;</p>
        <div class="sortings">
            <p class="none">Сортировать:</p>
            <p>По популярности</p>
            <p>По цене <span class="arrow">&or;</span></p>
        </div>
        <section class="cards">
            <ul class="card_list">
                <ProductCard v-for="i in 16" />
            </ul>
        </section>
    </article>
</template>

<script>
import ProductCard from "@/components/ProductCard"

export default {
    data() {
        return {}
    },
    components: {
        ProductCard,
    },
}
</script>

<style scoped>
.card_list {
    flex-wrap: wrap;
    /* justify-content: space-around; */
}
.card_list li {
    margin-bottom: 2.5%;
}
.sortings {
    display: flex;
}
.sortings p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin-right: 2.5%;
}
.arrow {
    display: inline-block;
    transform: scaleY(0.8);
}
@media only screen and (max-width: 480px) {
    .card_list {
        justify-content: center;
    }
    .none {
        display: none;
    }
    .sortings {
        justify-content: center;
    }
    .sortings p {
        margin-right: 30px;
    }
    .card_list li {
        margin: 0 0 25px 0;
    }
}
</style>
