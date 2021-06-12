<template>
    <article>
        <p class="title">Кейс от RandomStore</p>
        <section class="case">
            <img src="@/assets/img/arrow.png" alt="" width="74px" height="64px" class="arrow arrow_1">
            <div class="border"></div>
            <div class="scroling">
                <div>
                    <img src="@/assets/img/case/2.png" alt="" width="334px" height="160px">
                </div>
                <div>
                    <img src="@/assets/img/case/2.png" alt="" width="334px" height="160px">
                </div>
                <div>
                    <img src="@/assets/img/case/1.png" alt="" width="334px" height="160px">
                </div>
                <div>
                    <img src="@/assets/img/case/2.png" alt="" width="334px" height="160px">
                </div>
                <div>
                    <img src="@/assets/img/case/2.png" alt="" width="334px" height="160px">
                </div>
            </div>
            <div class="border"></div>
            
            <img src="@/assets/img/arrow.png" alt="" width="74px" height="64px" class="arrow arrow_2">


            
        </section>

            
    </article>
</template>

<script>
export default {
    name: 'CaseScrolling',
}
</script>



<style scoped>
.arrow{
    z-index: 99;

    width: 54px;
    height: 64px;
}

.arrow_1{
    margin: 0 -50px 0 0;
    transform: rotate(180deg);
}

.arrow_2{
    margin: 0 0 0 -50px;
}


.title{
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;

    text-align: center;
    margin: 50px 0 30px 0;
}
article{
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
}

.border{
    width: 8px;
    height: 624px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, #FFFFFF 48.44%, rgba(255, 255, 255, 0.05) 100%);
}

.case{
    display: flex;
    align-items: center;
    width: 350px;
    margin: 0 auto;
}
.case div img{
    display: block;
    margin: 0 auto;
}
.scroling div{
    overflow: hidden;
    
}

.scroling div img{
    border-radius: 8px;
    box-sizing: border-box;
    border: 4px solid rgb(219, 198, 4);
}

.scroling div:nth-child(1) img, .scroling div:nth-child(5) img{
    width: 274px;
    /* height: 134px; */

    border: 2px solid #fff;
}

.scroling div:nth-child(2) img, .scroling div:nth-child(4) img{
    width: 304px;
    /* height: 148px; */

    border: 2px solid #fff;
}

@media screen and (max-width: 1024px)  {
    .case{
        display: flex;
        align-items: center;
        width: 138px;
        margin: 0 auto;
    }

    .scroling img{
        width: 124px;
        height: 80px;
    }
    .scroling div:nth-child(1) img, .scroling div:nth-child(5) img{
        width: 116px;
        height: 72px;
        /* height: 134px; */

        border: 2px solid #fff;
    }

    .scroling div:nth-child(2) img, .scroling div:nth-child(4) img{
        width: 120px;
        height: 76px;
        /* height: 148px; */

        border: 2px solid #fff;
    }
    .border{
        width: 2px;
        height: 320px;
    }
    .arrow{
        z-index: 99;

        width: 20px;
        height: 15px;

        display: none;
    }
    .arrow_1{
        margin: 0 -50px 0 0;
        transform: rotate(180deg);
    }

    .arrow_2{
        margin: 0 0 0 -50px;
    }
    .title{
        font-size: 24px;
    }
}


</style>