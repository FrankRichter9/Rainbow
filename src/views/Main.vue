<template>
  <main>
    <MainProducts />
    <NewItems />
    <KeyItems />
    <AccountItems />
  </main>
</template>

<script>
import MainProducts from '@/components/MainProducts'
import NewItems from '@/components/NewItems'
import KeyItems from '@/components/KeyItems'
import AccountItems from '@/components/AccountItems'
import Footer from '@/components/Footer'

export default {


  name: 'Home',
  components: {
    MainProducts,
    NewItems,
    KeyItems,
    AccountItems,
    Footer,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
