<template>
  <div>
    <Header />
    <main>
      <MainProducts />
      <NewItems />
      <KeyItems />
      <AccountItems />
    </main>
    <Footer />
    <PopupItem />
  </div>
</template>

<script>
import MainProducts from '@/components/MainProducts'
import NewItems from '@/components/NewItems'
import KeyItems from '@/components/KeyItems'
import AccountItems from '@/components/AccountItems'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PopupItem from '@/components/popups/PopupItem'

export default {
  data(){
    return {

    }
  },


  name: 'Home',
  components: {
    MainProducts,
    NewItems,
    KeyItems,
    AccountItems,
    Header,
    Footer,
    PopupItem,
  },
  methods: {
    
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
