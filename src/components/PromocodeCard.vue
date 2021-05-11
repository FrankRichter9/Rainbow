<template>
    <li>
        <a href="#">
            <div class="Main_card">
                <div class="reletive">
                    <div class="vignette">
                        <img src="" alt="Основной товар">
                    </div>
                    <p class="header_link">
                        Промокод
                    </p>
                </div>
            </div>
        </a>
    </li>
</template>




<style scoped>
a{
    text-decoration: none;
}
.Main_card{
    background-color: #FF7373;

    width: 285px;
    height: 210px;

}
li{
    display: block;

    
    

    margin: 0 0 0 8.759124087591241%;
  
}

@media screen and (max-width: 1024px)  {
    .Main_card{

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
}
</style>