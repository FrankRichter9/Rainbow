<template>
    <article class="popup" v-show="getId">
        <section class="popup_body">
            <section class="info">
                <div class="title">
                    Ключ Rainbow Six: Siege Standart {{openId}}
                </div>

                <div class="text">
                    Мгновенно после оплаты и со скидками вы получаете лицензионный ключ активации на полноценную версию UPLAY игры Tom Clancy´s Rainbow Six: Siege. Это НЕ урезанная стартер-версия <br>

                    «Tom Clancy’s Rainbow Six® Осада» – новая часть всемирно известной серии шутеров от первого лица, разработанная Ubisoft Montreal для консолей нового поколения и PC. В основе сюжета игры лежит борьба с терроризмом по всему миру. В «Tom Clancy’s Rainbow Six Осада» вы сможете в полной мере приобщиться к искусству разрушения. Вас ждут напряженные бои с постоянным риском для жизни, возможность командной игры и, конечно, сложнейшие операции. Одна ошибка – и все взлетит на воздух! Сетевой режим выводит жаркие перестрелки и тактическое планирование на новый уровень в лучших традициях серии «Tom Clancy’s Rainbow Six». <br>

                    Станьте агентом по борьбе с мировым терроризмом, мастером ведения боя на коротких дистанциях и специалистом по захвату стратегически важных объектов. Издание «Tom Clancy’s Rainbow Six® Осада» «Тактика осады» предоставит вам массу возможностей отточить тактические навыки и лично возглавить спасательную операцию или атаку на неприятеля. <br>

                    Активации ключа:<br>

                    •Если не установлен Uplay клиент, скачайте и установите его . (http://uplay.ubi.com/)
                    •Войдите в свой аккаунт Uplay или зарегистрируйте новый, если у вас его еще нет.
                    •Нажмите на изображение «Шестерёнки» и выберите «Активировать продукт».
                    •Введите ключ активации (для его получения необходимо купить Tom Clancys Rainbow Six:Siege).
                    •После этого игра отобразится в библиотеке игр и вы сможете скачать Tom Clancys Rainbow Six:Siege.
                </div>
            </section>
            <section class="form"> 
                <div class="close_button">
                    <span @click="close">&times;</span>
                </div>
                <div class="price">
                    <span>Цена:</span>
                    <span>
                        <span class="old_price">119₽</span>
                        <span class="now_price">119₽</span>
                    </span>
                </div>
                    <section>
                        <span class="label">Гарантия</span>

                        <div class="radio">
                            <div 
                                :class="{active_radio: form.radio === 'no'}" 
                                @click="form.radio = 'no'"
                            >Без</div>
                            <div 
                                :class="{active_radio: form.radio === 'week'}" 
                                @click="form.radio = 'week'"
                            >Неделя</div>
                            <div 
                                :class="{active_radio: form.radio === 'month'}" 
                                @click="form.radio = 'month'"
                            >Месяц</div>
                            <div 
                                :class="{active_radio: form.radio === 'year'}" 
                                @click="form.radio = 'year'"
                            >Год</div>
                        </div>
                    </section>
                    


                    <label for="">
                        <span class="label">Email</span>    
                        <input type="email" name=""  placeholder="Введите email" v-model="form.email">
                    </label>

                    <label for="promo">
                       <span class="label">Промокод</span>   
                    </label>
                    <div class="flex">
                        <input type="text" name=""  placeholder="Введите промокод" v-model="form.promo">
                        <button type="button">Применить</button>
                    </div>
                    
                    
                    <div class="flex submit_margin">
                        <div class="counter">
                            <span
                                @click="form.counter - 1 > 0 ? form.counter-- : {}"
                            >-</span>
                            <span>{{form.counter}}</span>
                            <span
                                @click="form.counter++"
                            >+</span>
                        </div>

                        <button 
                            type="button" 
                            class="submit"
                            @click="getObject"
                        >Купить за 169 ₽</button>
                    </div>
            </section>
        </section>
    </article>
</template>

<script>
export default {
    data(){
        return {
            popup: {
                active: false
            },
            form: {
                radio:'no',
                email: '',
                promo: '',
                counter: 1,
            }
        }
    },
    props: ['openId'],
    computed: {
        getId(){
            return this.popup.active = this.openId > 0 ? true : false
        }
    },
    methods: {
        close(){
           this.$emit('close')
        },
        getObject(){
            console.log(this.form)
        }
    }
}
</script>

<style scoped>

    
    
    button{
        padding: 0;
        border: none;
    }
    .popup{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.678);
        z-index: 99;
    }

    .popup_body{
        color: #000;
        max-width: 1200px;
        margin: 10% auto;

        display: flex; 

        background: linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(../../assets/img/btf_5.jpeg);
        background-size: 100%;
    }

    .info{
        width: 56.75%;
        padding: 3.873715124816446% 4.342143906020558%;
        
    }

    .form{
        width: 43.25%;
        background-color: rgba(0, 0, 0, 0.9);
    }

    .title{
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;

        
    }

    .text{
        margin: 2.873715124816446% 0 0 0;

        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
    }

    .form{
        color: #fff;
    }
    .form{
        box-sizing: border-box;
        padding: 0 4.342143906020558%;
    }

    .price{
        /* margin: 0 0 0 8.342143906020558%; */

        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
        line-height: 41px;

        display: flex;
        justify-content: space-between;
    }

    .old_price{
        /* margin: 0 0 0 35%; */
        font-family: Inter;
        font-style: normal;
        font-weight: 200;
        font-size: 24px;
        line-height: 29px;

        color: rgba(255, 255, 255, 0.726);

        text-decoration: line-through;
    }

    .now_price{
        margin: 0 3% 0 5%;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
        line-height: 41px;
    }

    .close_button{
        text-align: right;
        margin: 0 -8% 0 0 ;
        font-size: 54px;

        
    }
    
    .close_button span{
        cursor: pointer;
    }

    .label{
        display: block;

        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        margin: 22px 0 7px 0;
    }
    input{
        display: block;

        height: 50px;
        width: 100%;

        color: #fff;
        
        background: rgba(255, 255, 255, 0.05);
        /* Transparency/White 40% */

        border: 1px solid rgba(255, 255, 255, 0.4);
        box-sizing: border-box;
        border-radius: 30px;

        box-sizing: border-box;
        padding: 20px;
    }

    .radio{
        display: flex;
        justify-content: space-between;

        border-radius: 30px;
        border: 1px solid rgba(255, 255, 255, 0.4);
    }

    .radio div{
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 18px;
        border-radius: 30px;
        padding: 15px 26px;
        cursor: pointer;

        box-sizing: border-box;
    }

    .active_radio {
        border: 1px solid #f00;
    }

    

    /* promocode */

    .flex{
        display: flex;
        justify-content: space-between;
    }
    .flex input{
        width: 80%;
        border-radius: 30px 0 0 30px;
    }

    .flex button{
        margin: 0 0 0 -20px;
        width: 50%;
        background: #F0F1F4;
        border-radius: 30px;
    }


    /*  */


    .counter{
/* 
        height: 50px;
        width: 100%; */
        
        background: rgba(255, 255, 255, 0.05);
        /* Transparency/White 40% */

        border: 1px solid rgba(255, 255, 255, 0.4);
        box-sizing: border-box;
        border-radius: 30px;

        box-sizing: border-box;
        padding: 20px;

        user-select: none;
    }

    .flex .submit{
        margin: 0;

        background: #EB5050;
        box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);

        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #fff;
    }

    .counter span{
        margin: 0 10px;

        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
    }

    .counter span:first-child, .counter span:nth-child(3){
        margin: 0 15px;
        font-size: 20px;
        cursor: pointer;
    }

    .active_radio{
        border: ;
    }

    .submit_margin{
        margin: 22px 0 50px 0;
    }

    input{
        outline: none;
    }

    @media screen and (max-width: 1024px)  {
        .popup_body{
            margin: 0;
            flex-direction: column;
            width: 100%;

            box-sizing: border-box;
            
        }

        .info, .form{
            box-sizing: border-box;
            width: 100%;
            
        }
        
        .popup{
            overflow-y: scroll;
            width: 100%;
        }

        .info .title{
            width: 80%;
        }

        .info .text{
            width: 100%;
            height: 300px;
            overflow-y: scroll;
            text-overflow: ellipsis

        }

        .close_button{
        text-align: right;
        margin: -420px 0 400px 0 ;
        font-size: 54px;
        color: #000;
        }

        .submit_margin{
            flex-direction: column;
        }

        .submit_margin .submit{
            margin: 22px 0 10px 0;
            height: 55px;
            width: 100%;
        }

        .counter{
            display: flex;
            justify-content: space-between;
        }

        .radio div{
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;

            border-radius: 30px;
            padding: 15px 15px;
            /* border: 1px solid red; */
            cursor: pointer;
        }


    }
</style>