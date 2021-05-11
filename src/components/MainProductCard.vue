<template>
    <li>
        <a href="#">
            <div class="Main_card"
                v-on:mouseover="active = true" 
                v-on:mouseout="active = false"
                >
                <div class="reletive">
                    <div
                        class="vignette" 
                        :class="{blur: active}"
                        >
                        <img 
                            src="@/assets/img/image1.png" 
                            alt="Основной товар"
                            >
                    </div>
                    <section class="Card_text">
                        <p 
                            class="main_card_name"
                            :class="{main_card_name_active: active}"
                            >
                            Основной товар  
                        </p>
                        <p class="main_card_description"
                            :class="{display_block: active}"
                        >
                            Самый бюджетный вариант для игры на лицензионных серверах.
                        </p>
                        <router-link class="button" to='/'
                            :class="{display_block: active}"
                        >Купить за 69 ₽ →</router-link>
                    </section>
                </div>
            </div>
        </a>
    </li>
</template>


<script>

export default {
    data(){
        return {
            active: false,
        }
    },
    methods: {

    },

}
</script>





<style scoped>
a{
    text-decoration: none;
}
.button{
    text-decoration: none;
    display: block;
    width: 235px;
    height: 47px;

    margin: 0 auto;

    background: #EB5050;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 30px;

    text-align: center;
    box-sizing: border-box;
    padding: 4.76363636363636% 0 0 0;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;

    display: none;
}


.main_card_name{
    font-family: Inter;
    font-style: italic;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    margin: 8.771929824561404%;

}

.main_card_description{
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin: 4% 8.771929824561404%;

    display: none;
}


li{
    display: block;

    margin: 0 0 0 2.18978102189781%;
}
li:first-child{
    margin: 0;
}

.Main_card{
    background-color: #6BF854;

    width: 285px;
    height: 450px;

    overflow: hidden;
}

.reletive{
    position: relative;
}

.vignette img {
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    height: 370px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    border:1px solid rgba(107, 248, 84, 1);
}

.vignette:after {
    content: "";
    display: block;
    background-color: red;
    width: 100%;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(ellipse at center, rgba(107, 248, 84, 0) 0%,rgba(107, 248, 84, 1) 70%,rgba(107, 248, 84, 100%));
    border-radius: 50%;
    z-index: 1;
}

/* active */


.display_block{
    position: relative;
    z-index: 3;
    display: block;
}

.blur{
    transition: .4s;
    filter: blur(5px);
}

.main_card_name_active{
    transition: .3s;
    position: relative;
    z-index: 3;
    margin: -30% 0 0 8.771929824561404%;
}


@media screen and (max-width: 1024px)  {
    .Main_card{
        background-color: #6BF854;

        width: 300px;
        height: 200px;

        margin: 6.25% auto;

        overflow: hidden;
    }

    .main_card_description, .main_card_name, .button{
        display: block;
        position: relative;
        top: -370px !important;
        z-index: 10;
    }
    

    .vignette img {
        width: 100%;
        border-radius: 10%;
    }

    .vignette:after {
        content: none;

    }
    .vignette:after {
        content: "";
        display: block;
        background-color: red;
        width: 100%;
        height: 62.5%;
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(ellipse at center, rgba(107, 248, 84, 0) 0%,rgba(107, 248, 84, 1) 70%,rgba(107, 248, 84, 100%));
        border-radius: 10%;
        z-index: 1;
    }
    li{
        margin: 0;
    }

}

</style>