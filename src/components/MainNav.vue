<template>
    <nav>
            <ul 
                :class="{
                    footer: footer,
                }"
                
                >
                <li v-show="activeNav" class="close-button"
                    @click="$emit('close', null)"
                >
                    &times;
                </li>
                <li>
                    <a href="#">
                        Youtube канал
                    </a>
                </li>
                <li>
                    <a href="#">
                        Поддержка
                    </a>
                </li>
                <li>
                    <a href="">
                        Правила возврата
                    </a>
                </li>
                <li>
                    <a href="">
                        Пользовательское соглашение
                    </a>
                </li>
            </ul>
        </nav>
</template>

<script>

export default {
    props: [
            'footer',
            'activeNav',
            ],
}
</script>




<style scoped>

a{
    text-decoration: none;
}

ul{
    box-sizing: border-box;
    display: flex;
    margin: 0 0 0 10%;
    list-style: none;
}
.footer{
    margin: 50px 0 0 20px;
}

li{
    width: 20%;
    display: block;
    
    font-family: Inter;
    font-style: normal;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    text-align: center;

    margin-top: 45px;
}



.footer li{
    text-align: left;
}

li:nth-child(3){
    width: 25%;
}

li:last-child{
    width: 35%;
}


/* phone */

.close-button{
    font-family: Inter-Light;
    font-size: 20px;
}

@media screen and (max-width: 1024px)  {
    .footer{
    margin: 50px 0 0 0;
}
    ul{
        display: block;
        /* margin: 0; */
        width: 78.125vw;
        background-color: #141414;

        position: absolute;
        z-index: 99; 
        top: 0;
        left: -10vw;
    }
    li a{
    font-size: 14px;
    line-height: 17px;
    }

    li{
        text-align: left;
        margin: 0 0 44px 20px;
        width: 100% !important;

        font-weight: 600;
        font-size: 14px;
        font-family: Inter;
        font-style: bold;
        font-size: 3.75vw;
        line-height: 15px;

        
    }

    .footer{
        display: block;
        position: static;
        background: none;
        color: red
    }

    .footer li{
        text-align: left;
    }
    .close-button{
        font-family: Inter-Light;
        font-size: 80px;
        margin: 38px 0 140px 24px;
    }
}

</style>