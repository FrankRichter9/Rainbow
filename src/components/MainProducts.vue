<template>
    <article class="Article Main_products_article">
        <section class="Main_products_section">
            <ul class="Main_products">
                <MainProductCard
                    v-for="(product, index) in products"
                    v-bind:key="index"
                    :index="index"
                />
            
            </ul>
        </section>


        <section class="Case_and_Promocode_section">
            <ul>
                <CaseCard />
                <PromocodeCard />
            </ul>
        </section>
    </article>
</template>


<script>
import MainProductCard from '@/components/MainProductCard'
import CaseCard from '@/components/CaseCard'
import PromocodeCard from '@/components/PromocodeCard'

export default {
    data(){
        return {
            products: [
                {title: 'Основной товар 1'},
                {title: 'Основной товар 2'},
                {title: 'Основной товар 3'},
            ]
        }
    },
    components: {
        MainProductCard,
        CaseCard,
        PromocodeCard,
    }
}
</script>

<style scoped>
.Main_products{
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    justify-content: space-between;
}

.Main_products_section{
    overflow: auto;
    flex-wrap: nowrap;
    flex-basis: 75%;
}
.Case_and_Promocode_section{
    flex-basis: 25%;
}

.Main_products_article{
    display: flex;
}

@media screen and (max-width: 1024px)  {
    .Main_products_article{
        flex-direction: column;
        justify-content: center;
    }
    .Main_products_article li .Main_card{
        width: 90%;
    }
    .Main_products{
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }

    .Main_products_section, .Case_and_Promocode_section{
        justify-content: center;
        flex-basis: 100%;
    }
    .Main_products_section li, .Case_and_Promocode_section li{
        width: 95%;
        margin: 0 auto;
    }
    .Case_and_Promocode_section{
        flex-basis: 100%;
    }
}



</style>