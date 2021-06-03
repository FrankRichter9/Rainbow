<template>
    <li>
        <a href="#">
            <div class="Main_card">
                <div class="reletive">
                    <div class="vignette">
                        <!-- <img src="" alt="Промокод"> -->
                    </div>
                    <p class="promo-name">
                        Промокод 
                    </p>
                    <span class="promo-description">
                        Испытай удачу в нашем кейсе
                    </span>
                </div>
            </div>
        </a>
    </li>
</template>




<style scoped>
.promo-description{
    display: none;
}
a{
    text-decoration: none;
}
.promo-name{
    text-transform: uppercase;

    font-family: Inter-BoldItalic;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin: 0 40px 25px 25px;
}
.Main_card{
    background-color: #FF7373;
    background-image: url("../assets/img/case.png");
    width: 285px;
    height: 210px;
    border-radius: 4px;

    box-sizing: border-box;
    padding: 156px 0 0 0;
}
li{
    display: block;

    
    

    margin: 0 0 0 8.759124087591241%;
  
}

@media screen and (max-width: 1024px)  {
    .promo-description{
        display: inline;
        margin: 0 10px 0 25px;
    }
    .promo-name{
        margin: 0 10px 10px 25px;
    }

    .Main_card{

        width: 300px;
        height: 200px;

        margin: 6.25% auto;

        overflow: hidden;

        padding: 126px 0 0 0;

        
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
}
</style>