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
                    v-for="product in items" 
                    v-bind:key="product.id"
                    :product="product"
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
    name: 'KeysFullList',
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
    computed: {
        items: function () {
            
                let allItems = []
                
                if(this.type === 'accounts'){
                    let arr = this.$store.getters.getItemsByType("account")
                    arr.forEach(element => {
                        element.products.forEach(item => {
                            allItems.push(item)
                    })
                    });
                    
                    return allItems;
                }else 
                if(this.type === 'keys'){
                    let arr = this.$store.getters.getItemsByType("mc")
                    arr.forEach(element => {
                        element.products.forEach(item => {
                            allItems.push(item)
                    })
                    });
                    
                    return allItems;
                }else 
                if(this.type === 'newItems'){
                    let arr = this.$store.getters.getItemsByType("mc-fullprem")
                    arr.forEach(element => {
                        element.products.forEach(item => {
                            allItems.push(item)
                    })
                    });
                    
                    return allItems;
                }else return []
                

    },
}
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
        width: calc(100% - 10px);
        margin: 0 0 0 10px;
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
        margin: 0 10px 0 0;
    }
    .none{
        display: none;
    }

    
}
</style>
