<template>
    <nav>
            <ul 
                :class="{
                    footer: footer,
                }"
                
                >
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
    margin: 50px 10% 0 10%;
    list-style: none;
}
.footer{
    margin: 50px 0 0 7.291666666666667%;
}

li{
    width: 20%;
    display: block;

    font-family: Inter;
    font-style: normal;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    text-align: right;
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



@media screen and (max-width: 1024px)  {
    ul{
        display: block;
        margin: 0;
        width: 78.125vw;
        background-color: #141414;

        position: absolute;
        z-index: 99;
        


        
    }

    li{
        text-align: left;
        margin: 40px 0 80px 7%;
        width: 100% !important;

        font-family: Inter;
        font-style: normal;
        font-weight: 500;
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
}

</style>