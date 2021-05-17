<template>
    <div>
        <div class="info">
            <h3 class="info_title">Испытай свою удачу!</h3>
            <p>
                Принцип игры "Рулетка" основан на случайном выпадении игр.
                <br />
                Мы не вмешиваемся в процесс розыгрыша, <br />
                благодаря этому честность рулетки невозможно нарушить.
            </p>
        </div>
        <section class="form">
            <section>
                <span class="label">Гарантия</span>

                <div class="radio">
                    <div>Без</div>
                    <div>Неделя</div>
                    <div>Месяц</div>
                    <div>Год</div>
                </div>
            </section>
            <label for="">
                <span class="label">Email</span>
                <input type="email" name="" id="" placeholder="Введите email" />
            </label>

            <label for="promo">
                <span class="label">Промокод</span>
            </label>
            <div class="flex">
                <input
                    type="text"
                    name=""
                    id="promo"
                    placeholder="Введите промокод"
                />
                <button type="button">Применить</button>
            </div>

            <div class="flex submit_margin">
                <div class="counter">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>

                <button type="button" class="submit">Купить за 169 ₽</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
button {
    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}
.form {
    color: #fff;
}
.form {
    max-width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
}

.info {
    margin: 0 auto;
    text-align: center;
    width: 40%;
}
.info_title {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 15px;
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

    background: rgba(255, 255, 255, 0.05);
    /* Transparency/White 40% */

    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 30px;

    box-sizing: border-box;
    padding: 20px;
    outline:none;
    color: #FFF;
}

.radio {
    display: flex;

    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    justify-content: space-between;
}

.radio div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    border-radius: 30px;
    padding: 15px 26px;
    /* border: 1px solid red; */
    cursor: pointer;
}

/* promocode */

.flex {
    display: flex;
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

/*  */

.counter {
    /* 
        height: 50px;
        width: 100%; */
    display: flex;
    background: rgba(255, 255, 255, 0.05);
    /* Transparency/White 40% */

    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 30px;

    box-sizing: border-box;
    padding: 20px;
    margin-right: 5%;
    width: 40%;
    text-align: center;
    justify-content: space-between;
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
    width: 55%;
}

.counter span {
    margin: 0 10px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
}

.counter span:first-child,
.counter span:nth-child(3) {
    margin: 0 15px;
    font-size: 20px;
    cursor: pointer;
}

.submit_margin {
    margin: 50px 0 50px 0;
}

@media only screen and (max-width: 480px)  {
    .form {
        padding: 0 12px;
    }
    .info {
        display: none;
    }
    .submit_margin{
        flex-direction: column;
    }
    .counter{
        display: flex;
        width: 100%;
        margin-bottom: 40px;
        justify-content: space-between;
    }
    .flex .submit {
        width: 100%;
        height: 61px;
    }
}

</style>
