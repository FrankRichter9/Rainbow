<template>
<transition name="fade">
    <article class="popup" v-show="getId">
        <section class="popup_body">
            <section class="info">
                <div class="title">
                    Ключ Rainbow Six: Siege Standart 
                </div>

                <div class="text">
                    Мгновенно после оплаты и со скидками вы получаете
                    лицензионный ключ активации на полноценную версию UPLAY игры
                    Tom Clancy´s Rainbow Six: Siege. Это НЕ урезанная
                    стартер-версия <br />

                    «Tom Clancy’s Rainbow Six® Осада» – новая часть всемирно
                    известной серии шутеров от первого лица, разработанная
                    Ubisoft Montreal для консолей нового поколения и PC. В
                    основе сюжета игры лежит борьба с терроризмом по всему миру.
                    В «Tom Clancy’s Rainbow Six Осада» вы сможете в полной мере
                    приобщиться к искусству разрушения. Вас ждут напряженные бои
                    с постоянным риском для жизни, возможность командной игры и,
                    конечно, сложнейшие операции. Одна ошибка – и все взлетит на
                    воздух! Сетевой режим выводит жаркие перестрелки и
                    тактическое планирование на новый уровень в лучших традициях
                    серии «Tom Clancy’s Rainbow Six». <br />

                    Станьте агентом по борьбе с мировым терроризмом, мастером
                    ведения боя на коротких дистанциях и специалистом по захвату
                    стратегически важных объектов. Издание «Tom Clancy’s Rainbow
                    Six® Осада» «Тактика осады» предоставит вам массу
                    возможностей отточить тактические навыки и лично возглавить
                    спасательную операцию или атаку на неприятеля. <br />

                    Активации ключа:<br />

                    •Если не установлен Uplay клиент, скачайте и установите его
                    . (http://uplay.ubi.com/) •Войдите в свой аккаунт Uplay или
                    зарегистрируйте новый, если у вас его еще нет. •Нажмите на
                    изображение «Шестерёнки» и выберите «Активировать продукт».
                    •Введите ключ активации (для его получения необходимо купить
                    Tom Clancys Rainbow Six:Siege). •После этого игра
                    отобразится в библиотеке игр и вы сможете скачать Tom
                    Clancys Rainbow Six:Siege.
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
                            :class="{ active_radio: form.radio === 'no' }"
                            @click="form.radio = 'no'"
                        >
                            Без
                        </div>
                        <div
                            :class="{ active_radio: form.radio === 'week' }"
                            @click="form.radio = 'week'"
                        >
                            Неделя
                        </div>
                        <div
                            :class="{ active_radio: form.radio === 'month' }"
                            @click="form.radio = 'month'"
                        >
                            Месяц
                        </div>
                        <div
                            :class="{ active_radio: form.radio === 'year' }"
                            @click="form.radio = 'year'"
                        >
                            Год
                            <img
                                src="@/assets/img/123.png"
                                alt=""
                                class="percent"
                            />
                        </div>
                    </div>
                </section>

                <label for="">
                    <span class="label">Email</span>
                    <input
                        type="email"
                        name=""
                        placeholder="Введите email"
                        v-model="form.email"
                        class="input__email"
                    />
                </label>

                <label for="promo">
                    <span class="label">Промокод</span>
                </label>
                <div class="flex">
                    <input
                        type="text"
                        name=""
                        placeholder="Введите промокод"
                        v-model="form.promo"
                        class="input__promo"
                    />
                    <button type="button">Применить</button>
                </div>

                <div class="flex submit_margin">
                    <div class="counter">
                        <span
                            @click="form.counter - 1 > 0 ? form.counter-- : {}"
                            >-</span
                        >
                        <span>{{ form.counter }}</span>
                        <span @click="form.counter++">+</span>
                    </div>

                    <button type="button" class="submit" @click="getObject">
                        Купить за 169 ₽
                    </button>
                </div>
            </section>
        </section>
    </article>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            popup: {
                active: false,
            },
            form: {
                radio: "no",
                email: "",
                promo: "",
                counter: 1,
            },
            isFocus: "no",
        }
    },
    props: ["openId"],
    computed: {
        getId() {
            return (this.popup.active = this.openId > 0 ? true : false)
        },
    },
    methods: {
        close() {
            this.$emit("close")
        },
        getObject() {
            console.log(this.form)
        },
    },
}
</script>

<style scoped>


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}




.percent{

    margin: -25px 0 0 5px;
    position: absolute;
}
button {
    padding: 0;
    border: none;
}
.popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.81);
    z-index: 99;
}

.popup_body {
    color: #000;
    max-width: 1200px;
    margin: 10% auto;

    display: flex;

    background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.85),
            rgba(255, 255, 255, 0.85)
        ),
        url(../../assets/img/btf_5.jpeg);
    background-size: 100%;
    visibility: visible;
    opacity: 1;
    transition: visibility 300ms, opacity 300ms;
}

.info {
    width: 56.75%;
    padding: 3.873715124816446% 4.342143906020558%;
}

.form {
    width: 43.25%;
    background-color: rgba(0, 0, 0, 0.9);
}

.title {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
}

.text {
    margin: 2.873715124816446% 0 0 0;
    padding: 0 24.37591776798825% 0 0;
    height: 443px;
    overflow-y: scroll;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
}

.text::-webkit-scrollbar {
    width: 0;
}

.form {
    color: #fff;
}
.form {
    box-sizing: border-box;
    padding: 0 4.342143906020558%;
}

.price {
    margin: 0 0 49px 0;

    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;

    display: flex;
    justify-content: space-between;
}

.old_price {
    /* margin: 0 0 0 35%; */
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 29px;

    color: rgba(255, 255, 255, 0.726);

    text-decoration: line-through;
}

.now_price {
    margin: 0 3% 0 5%;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 41px;
}

.close_button {
    text-align: right;
    margin: 0 -8% 0 0;
    font-size: 54px;
}

.close_button span {
    cursor: pointer;
}

.label {
    display: block;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    margin: 22px 0 7px 0;
}
input {
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

.radio {
    display: flex;
    justify-content: space-between;

    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    
}

.radio div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    border-radius: 30px;
    padding: 15px 26px;
    cursor: pointer;
    width: 102px;
    text-align: center;

    box-sizing: border-box;
}

/* promocode */

.flex {
    display: flex;
    justify-content: space-between;
}
.flex input {
    width: 80%;
    border-radius: 30px 0 0 30px;
}

.flex button {
    margin: 0 0 0 -20px;
    width: 50%;
    background: #f0f1f4;
    border-radius: 30px;
    cursor: pointer;
}
.promo button:hover {
    background: #fff;
}
/*  */
.counter span {
    display: block;
    width: 20px;
    text-align: center;
}
.counter {
    width: 156px;

    background: rgba(255, 255, 255, 0.05);
    /* Transparency/White 40% */

    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 30px;

    box-sizing: border-box;
    padding: 16px;
    display: flex;

    justify-content: space-between;
    user-select: none;
}

.flex .submit {
    margin: 0;

    background: #eb5050;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
}

.counter span:first-child,
.counter span:nth-child(3) {
    margin: 0 10px;
    font-size: 16px;
    cursor: pointer;
}

.counter span:first-child:hover,
.counter span:nth-child(3):hover {
    font-size: 20px;
}

.counter span {
    margin: 0 10px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
}

.submit_margin {
    margin: 50px 0 50px 0;
}

input {
    outline: none;
}

.active_radio {
    position: relative;
    background-color: #000;
}

.active_radio::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    padding: 2px;
    background: linear-gradient(
        90deg,
        rgba(255, 187, 55, 1) 0%,
        rgba(137, 54, 243, 1) 50%,
        rgba(106, 248, 84, 1) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
}

.input__promo:focus{
    border: 1px solid #fff;
}
.input__email:focus{
    border: 1px solid #fff;
}
.success_state {
    border: 1px solid #3de959;
}
.error_state {
    border: 1px solid #fa4339;
}

@media screen and (max-width: 1024px) {
    .percent {
        margin: -25px 5px 0 0;
        position: absolute;
    }
    .counter {
        width: 100%;
    }
    .popup_body {
        margin: 0;
        flex-direction: column;
        width: 100%;

        box-sizing: border-box;
    }

    .info,
    .form {
        box-sizing: border-box;
        width: 100%;
    }

    .popup {
        overflow-y: scroll;
        width: 100%;
    }

    .info .title {
        width: 80%;
    }

    .info .text {
        width: 100%;
        height: 300px;
        overflow-y: scroll;
        text-overflow: ellipsis;
    }

    .close_button {
        text-align: right;
        margin: -420px 0 400px 0;
        font-size: 54px;
        color: #000;
    }

    .submit_margin {
        flex-direction: column;
    }

    .submit_margin .submit {
        margin: 22px 0 10px 0;
        height: 55px;
        width: 100%;
    }

    .counter {
        display: flex;
        justify-content: space-between;
    }

    .radio div {
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
