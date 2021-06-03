<template>
    <article class="Article Key_article">
        <p class="header_link">{{title}}</p>
        <div class="sortings" :class="{none: type === 'case' }">
            <p class="none">Сортировать:</p>
            <p>По популярности</p>
            <p>По цене <span class="arrow">&or;</span></p>
        </div>
        <section class="cards">
            <ul class="card_list" :class="{mobile: type === 'case'}">
                <ProductCard 
                    v-for="i in 16"
                    v-bind:key="i"
                    :type="'small'"
                    @open="open"
                    />
            </ul>
        </section>
    </article>
</template>

<script>
import ProductCard from "@/components/ProductCard"

export default {
    props: ['title', 'type'],
    data() {
        return {}
    },
    components: {
        ProductCard,
    },
    methods:{
        open: function(id = 0) {
            this.$emit("open", id)
        },
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
@media only screen and (max-width: 1024px) {
    .card_list {
        /* justify-content: center; */
        width: calc(100% - 24px);
        margin: 0 12px;
    }
    .none {
        display: none;
    }
    .sortings {
        justify-content: center;
        margin: 0 0 24px 0;
    }
    .sortings p {
        margin-right: 30px;
    }
    .card_list li {
        margin: 0 0 25px 0;
    }
    .mobile{
        flex-wrap: nowrap;
        overflow: auto;
        justify-content: space-between;
        flex-flow: row nowrap;
    }
    .mobile li {
        margin: 0 0 0 6.125%;
    }
    .none{
        display: none;
    }

    
}
</style>
