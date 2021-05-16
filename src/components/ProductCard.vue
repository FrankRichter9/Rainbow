<template>
    <li>
        <div class="card">
            <div class="reletive">
                <div class="vignette">
                    <img src="@/assets/img/gta.png" alt="Название">
                </div>
            </div>
            
            <span class="card_name">Need for Speed: Most Wanted</span>
            <div class="flex">
                <span class="card_price">1119 ₽</span>
                <a href="#" class="button" @click.prevent="$emit('open', 5)">	&#8250;</a>
            </div>
        </div>
    </li>
</template>


<style scoped>
.card{
  width: 285px;
    height: 380px;

    background: #FFFFFF;
    border-radius: 4px;
}

img{
    width: 277px;
    height: 240px;
    display: block;
    margin: 0 auto;
}
.reletive{
    position: relative;
}
.vignette:after {
    content: "";
    display: block;
    background-color: red;
    width: 100%;
    height: 240px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(255,255,255,100%) 0%, rgba(255,255,255,0) 100%);
}

.card_name{
    display: block;
    
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

    font-family: Inter;
    font-weight: 900;
    font-size: 28px;
    line-height: 34px;

    color: #191A1A;

    margin: 7.771929824561404% 0 0 8.771929824561404%;
}

.button{
    display: block;
    color: #FFF;

    text-decoration: none;

    text-align: center;
    font-size: 35px;

    width: 45px;
    height: 45px;


/* Red/SimpleRed */

    background: #EB5050;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 30px;

    margin: 5.263157894736842% 7.017543859649123% 0 8.771929824561404%;
}

.flex{
    display: flex;
    justify-content: space-between;
}
</style>