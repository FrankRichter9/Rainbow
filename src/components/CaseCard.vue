<template>
    <li>
        <router-link class="link" to="/case">
            <div class="Main_card">
                <div class="reletive">
                    <div class="vignette">
                        <!-- <img src="@/assets/img/case.png" alt="Кейс" class="case-img"> -->
                    </div>
                    <p class="case-name">
                        Кейс  
                    </p>
                    <span class="case-description">
                        Испытай удачу в нашем кейсе
                    </span>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'CaseCard',
}
</script>

<style scoped>
.Main_card{
    background-color: #FF7373;
    background-image: url("../assets/img/case.png");
    width: 285px;
    height: 210px;
    border-radius: 4px;

    box-sizing: border-box;
    padding: 156px 0 0 0;
}
.case-description{
    display: none;
}
a{
    text-decoration: none;
}
.case-name{
    text-transform: uppercase;

    font-family: Inter-BoldItalic;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin: 0 40px 25px 25px;
}
li{
    display: block;

    margin: 0 0 9.084745762711864% 8.759124087591241%;
}

.case-img{
    width: 285px;
    height: 210px;
    z-index: 10;
}

@media screen and (max-width: 1024px)  {
    .Main_card{

        width: 300px;
        height: 200px;

        margin: 6.25% auto;
        border-radius: 4px;
        overflow: hidden;

        padding: 126px 0 0 0;
    }
    .case-description{
        display: inline;
        margin: 0 10px 0 25px;
    }
    .case-name{
        margin: 0 10px 10px 25px;
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