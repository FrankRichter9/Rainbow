<template>
    <li>
        <div class="card" :class="{
            card__small: type === 'small'
        }" @click.prevent="openPopupId = 1">
            <div class="reletive">
                <div class="vignette">
                    <img class="game-name" :src="product.imgLink" alt="Название">
                </div>
            </div>
            
            <span class="card_name">{{product.displayName}}</span>
            <div class="flex">
                <span class="card_price">{{product.price}} ₽</span>
                <a href="#" class="button">	<img src="@/assets/img/arrow-white.png" alt="Стрелочка" class="arrow-white"></a>
            </div>
        </div>

        <PopupItem :openId="openPopupId" @close="closePopup" :product="product"/>
    </li>
</template>

<script>
import PopupItem from '@/components/popups/PopupItem'

export default {
    name: 'ProductCard',
    components: {
        PopupItem
    },
    props: [
        'type',
        'product'
    ],
    data(){
        return {
            openPopupId: -1,
        }
    },
    methods: {
        closePopup: function(){
            this.openPopupId = -1
        }
    },
}
</script>

<style scoped>
.card{
  width: 285px;
    height: 380px;

    background: #FFFFFF;
    border-radius: 4px;
    cursor: pointer;
}

.game-name{
    width: 277px;
    height: 240px;
    display: block;
    margin: 0 auto;
    padding-top: 4px;
}

.arrow-white{
    margin-left: 1px;
}


.reletive{
    position: relative;
}
.vignette:after {
    content: "";
    display: block;
    background-color: red;
    width: 100%;
    height: 245px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(255,255,255,100%) 0%, rgba(255,255,255,0) 100%);
}

.card_name{
    display: block;
    height: 38px;
    font-family: Inter;
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #191A1A;

    margin: 12.21660649819495% 8.771929824561404% 0 8.771929824561404%;
    
}

.card_price{
    display: block;

    font-family: Inter-Bold;
    font-weight: 900;
    font-size: 28px;
    line-height: 34px;

    color: #191A1A;

    margin: 12px 0 0 8.771929824561404%;
}

.button{
    display: block;
    color: #FFF;

    text-decoration: none;

    text-align: center;
    font-size: 31px;

    width: 45px;
    height: 45px;


/* Red/SimpleRed */

    background: #EB5050;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 30px;

    margin: 7px 7.017543859649123% 0 8.771929824561404%;
    
}

.button:hover{
    background: #FF7070;
}
/* .arrow-white{
    width: 25%;
} */

.button:hover .arrow-white{
    margin-left: 3px;
}

.flex{
    display: flex;
    justify-content: space-between;
}

@media screen and (max-width: 1024px)  {

.card{
    width: 220px;
    height: 320px;

    background: #FFFFFF;
    border-radius: 4px;
    cursor: pointer;
}
.game-name{
    width: 212px;
    height: 190px;
    display: block;
    margin: 0 auto;
    padding-top: 4px;
}
.vignette:after {
    content: none;
}
.vignette:after {
    content: "";
    display: block;
    background-color: red;
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
}
.card_name{
    margin: 15px 8.771929824561404% 0 8.771929824561404%;
}
.card_price{
    display: block;

    font-family: Inter-Bold;
    font-weight: 900;
    font-size: 28px;
    line-height: 34px;

    color: #191A1A;

    margin: 20px 0 0 8.771929824561404%;
}
/* ////////////////////// */

.card__small{
    width: 145px;
    height: 200px;
}

.card__small .game-name {
    width: 141px;
    height: 134px;
}

.card__small .vignette:after{
    content: none;
}

.card__small .vignette:after {
    content: "";
    display: block;
    background-color: red;
    width: 100%;
    height: 140px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    z-index: 10;
    
}
.card__small .card_name{
    position: relative;
    z-index: 20;
    margin-top: -10px;
    font-size: 14px;
}
.card__small .button{
    width: 24px;
    height: 24px;

    margin: 5px 8px 0 0;
}
.card__small .card_price{
    font-family: Inter-Bold;
    font-size: 16px;
    margin-top: 0;
}
.card__small .arrow-white{
    width: 5.87px;
    margin: 0 0 14px 1px;
}

}
</style>