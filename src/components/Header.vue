<template>
    <header>
        <section  class="logo">
            <router-link class="link" to="/">
                <img src="@/assets/img/Logo.png" alt="RandomStore">
                <div class="logo_text">
                    <span>RandomStore</span>
                </div>
            </router-link>
        </section>
        
        

        <section class="main_menu">
            <span 
                class="mobile_menu"
                @click="activeNav = !activeNav"
                >
                &equiv;
            </span>
            <MainNav 
                class="main_nav"
                :class="{display_block: activeNav}"
                />
        </section>
    </header>
</template>


<script>
import MainNav from '@/components/MainNav'


export default {
    data(){
        return {
            activeNav: false,
        }
    },
    components: {
        MainNav
    }
}
</script>


<style scoped>
header{
    display: flex;
    width: 100%;
    min-height: 140px;
}
.mobile_menu{
    display: none;
}

.logo{
    width: 30%;
}
a{
    text-decoration: none;
}
.logo  a{
    display: flex;
}

.logo img{
    margin: 10.5px 0 0 22.291666666666667%;
}
.logo_text{
    font-family: Inter;
    font-style: normal;
    font-size: 14px;
    margin: 49px 0 0 0;
}

.main_menu{
    width: 70%;
}

@media screen and (max-width: 1024px)  {
    .mobile_menu{
        display: block;
        font-size: 17vw;
        margin: 1% 0 0 10%;
        
    }
    .main_menu{
        order: -1;
    }
    .main_nav{
        display: none;
        
    }
    .logo_text{
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 5vw;
        line-height: 17px;
        margin: 15% 0 0 0;
    }
    .logo{
        width: 60%;
        margin: 2% 5% 0 0;
        
    }
    header{
        justify-content: space-around;
    }
    .logo img{
        width: 30%;
        height: 30%;
        margin: 10.5px 0 0 0;
    }
    .logo  a{
        display: flex;
        justify-content: flex-end;
    }
    .display_block{
        display: block;
    }
}





</style>
