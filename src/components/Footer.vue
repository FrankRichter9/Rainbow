<template>
    <footer>
        <section class="footer_nav">
            <MainNav
                :footer="true"
             />
            <p class="footer_info">
                Платформа для продажи цифровых товаров. Торговый агрегатор по оказанию услуг в сфере торговли.
                Все закупаемые ключи приобретаются у официальных поставщиков. Все названия продуктов, компаний и марок, логотипы и товарные знаки являются собственностью соответствующих владельцев.
            </p>
        </section>


        <section class="footer_logo">
            <section  class="logo">
                <router-link class="link" to="/">
                    <img src="@/assets/img/Logo.png" alt="RandomStore">
                    <div class="logo_text">
                        <span>RandomStore</span>
                    </div>
                </router-link>
            </section>
            
            <span>
                Designed by DivineDsgn
            </span>
        </section>
    </footer>
</template>

<script>
import MainNav from '@/components/MainNav'

export default {
   components: {
       MainNav
   }
}
</script>

<style scoped>

.footer_nav{
    flex-basis: 75%;
}
footer{
    display: flex;
    justify-content: space-between;
}
a{
    text-decoration: none;
}
.logo{
    margin: 0 72.291666666666667% 0 0;
}
a{
    text-decoration: none;
}
.logo  a{
    display: flex;
}

.logo img{
    margin: 10.5px 0 0 5%;
}
.logo_text{
    font-family: Inter;
    font-style: normal;
    font-size: 14px;
    margin: 49px 7.291666666666667% 0 0;
}
ul{
    margin: 0;
}

.footer_info{
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;

    max-width: 700px;
    margin: 3.263888888888889% 0 6.180555555555556% 7.291666666666667%;
}

.footer_logo{
    margin: 0 7.291666666666667% 0 0;
}


@media screen and (max-width: 1024px)  {
    .footer_nav{
        flex-basis: 100%;
    }
    footer{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }
    .footer_info{
        font-size: 3vw;
        line-height: 3.4vw;
    }

    .logo{
        margin: 3.263888888888889% 0 6.180555555555556% 7.291666666666667%;
    }
    a{
        text-decoration: none;
    }
    .logo  a{
        display: flex;
        margin: 0;
    }
    .logo img{
        margin-left: 0;
    }
    
    .logo_text{
        font-family: Inter;
        font-style: normal;
        font-size: 14px;
        margin: 49px 7.291666666666667% 0 0;
    }
    .footer_logo{
        width: 100%;
    }
    .footer_logo span{
        margin: 3.263888888888889% 0 20px 7.291666666666667%;
    }

}

</style>
