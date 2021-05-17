<template>
    <li>
        <router-link class="link" to="/case">
            <div class="Main_card">
                <div class="reletive">
                    <div class="vignette">
                        <img src="" alt="Основной товар">
                    </div>
                    <p>
                        Кейс    
                    </p>
                </div>
            </div>
        </router-link>
    </li>
</template>

<style scoped>
.Main_card{
    background-color: #FF7373;

    width: 285px;
    height: 210px;
}

a{
    text-decoration: none;
}

li{
    display: block;

    margin: 0 0 9.084745762711864% 8.759124087591241%;
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