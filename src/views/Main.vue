<template>
  <div>
    <Header />
    <main>
      <MainProducts />
      <NewItems @open="openpopup"/>
      <KeyItems @open="openpopup"/>
      <AccountItems @open="openpopup" />
    </main>
    <Footer />
    <PopupItem :openId="openPopupId" @close="closePopup"/>
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
      openPopupId: -1
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
    openpopup: function(id){
      this.openPopupId = id
    },
    closePopup(){
      this.openPopupId = '-1'
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
