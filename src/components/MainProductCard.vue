<template>
    <li>
        <a href="#">
            <div
                class="Main_card"
                :class="{
                    Main_card_1: index + 1 === 1,
                    Main_card_2: index + 1 === 2,
                    Main_card_3: index + 1 === 3,
                }"
            >
                <div class="reletive">
                    <div class="vignette blur">
                        <img
                            src="@/assets/img/image1.png"
                            alt="Основной товар"
                        />
                    </div>
                    <section class="Card_text">
                        <p class="main_card_name main_card_name_active">
                            ОСНОВНОЙ ТОВАР
                        </p>
                        <p class="main_card_description display_block">
                            Самый бюджетный вариант для игры на лицензионных
                            серверах.
                        </p>
                        <router-link class="button display_block" to="/">
                            Купить за 69 ₽ →
                        </router-link>
                    </section>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
export default {
    name: 'MainProductCard',
    props: ["index"],
    data() {
        return {}
    },
    methods: {},
}
</script>

<style scoped>
a {
    text-decoration: none;
}
.button {
    text-decoration: none;
    display: block;
    width: 235px;
    height: 47px;

    margin: 0 auto;

    background: #eb5050;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    border-radius: 30px;

    text-align: center;
    box-sizing: border-box;
    padding: 4.76363636363636% 0 0 0;

    font-family: Inter;
    font-style: normal;
    font-size: 14px;
    line-height: 17px;

    display: none;
}
.button:hover {
    background: #ff7070;
}

.main_card_name {
    font-family: Inter-BoldItalic;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin: 0 40px 25px 25px;
}

.main_card_description {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    margin: 4% 8.771929824561404%;

    display: none;
}

li {
    display: block;

    margin: 0 0 0 2.18978102189781%;
}
li:first-child {
    margin: 0;
}

.Main_card {
    width: 285px;
    height: 450px;
    border-radius: 4px;
    overflow: hidden;
}

.Main_card_1 {
    background-color: #6bf854;
}

.Main_card_2 {
    background-color: #8936f3;
}

.Main_card_3 {
    background-color: #ffbb37;
}

.reletive {
    position: relative;
}

.vignette img {
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    height: 370px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    border: 1px solid rgba(107, 248, 84, 1);
}

.Main_card_2 .vignette img {
    border: 1px solid #8936f3;
}

.Main_card_3 .vignette img {
    border: 1px solid #ffbb37;
}

.Main_card_1 .vignette:after {
    content: "";
    display: block;
    background-color: red;
    width: 100%;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(
        ellipse at center,
        rgba(107, 248, 84, 0) 0%,
        rgba(107, 248, 84, 1) 70%,
        rgba(107, 248, 84, 100%)
    );
    border-radius: 50%;
    z-index: 1;
}

.Main_card_2 .vignette:after {
    content: "";
    display: block;
    background-color: red;
    width: 100%;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(
        ellipse at center,
        rgba(137, 54, 243, 0) 0%,
        rgba(137, 54, 243, 1) 70%,
        rgba(137, 54, 243, 100%)
    );
    border-radius: 50%;
    z-index: 1;
}

.Main_card_3 .vignette:after {
    content: "";
    display: block;
    background-color: red;
    width: 100%;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(
        ellipse at center,
        rgba(255, 187, 55, 0) 0%,
        rgba(255, 187, 55, 1) 70%,
        rgba(255, 187, 55, 100%)
    );
    border-radius: 50%;
    z-index: 1;
}

/* active */

.Main_card:hover .display_block {
    position: relative;
    z-index: 3;
    display: block;
}

.Main_card:hover .blur {
    transition: 0.4s;
    filter: blur(5px);
}

.Main_card:hover .main_card_name_active {
    transition: 0.3s;
    position: relative;
    z-index: 3;
    margin: -45% 40px 0 8.771929824561404%;
}

@media screen and (max-width: 1024px) {
    .Main_card:hover .display_block {
        position: relative;
        z-index: 3;
        display: block;
    }

    .Main_card:hover .blur {
        filter: none;
    }

    .Main_card:hover .main_card_name_active {
        position: relative;
        z-index: 3;
        margin: unset;
    }

    .main_card_name {
        font-family: Inter-BoldItalic;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        margin: 0 40px 15px 25px;
    }

    .Main_card {
        background-color: #6bf854;

        width: 300px;
        height: 200px;

        margin: 6.25% auto;

        overflow: hidden;
    }

    .main_card_description,
    .main_card_name,
    .button {
        display: block;
        position: relative;
        top: -340px !important;
        z-index: 10;
    }

    .vignette img {
        width: 100%;
        border-radius: 10%;
    }

    .vignette:after {
        content: none;
    }
    .Main_card_1 .vignette:after,
    .Main_card_2 .vignette:after,
    .Main_card_3 .vignette:after {
        content: none;
    }

    .Main_card_1 .vignette:after {
        content: "";
        display: block;
        background-color: red;
        width: 100%;
        height: 370px;
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(
            ellipse at center,
            rgba(107, 248, 84, 0) 0%,
            rgba(107, 248, 84, 1) 70%,
            rgba(107, 248, 84, 100%)
        );
        border-radius: 1%;
        z-index: 1;
    }

    .Main_card_2 .vignette:after {
        content: "";
        display: block;
        background-color: red;
        width: 100%;
        height: 370px;
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(
            ellipse at center,
            rgba(137, 54, 243, 0) 0%,
            rgba(137, 54, 243, 1) 70%,
            rgba(137, 54, 243, 100%)
        );
        border-radius: 1%;
        z-index: 1;
    }

    .Main_card_3 .vignette:after {
        content: "";
        display: block;
        background-color: red;
        width: 100%;
        height: 370px;
        position: absolute;
        top: 0;
        left: 0;
        background: radial-gradient(
            ellipse at center,
            rgba(255, 187, 55, 0) 0%,
            rgba(255, 187, 55, 1) 70%,
            rgba(255, 187, 55, 100%)
        );
        border-radius: 1%;
        z-index: 1;
    }
    li {
        margin: 0;
    }
}
</style>
