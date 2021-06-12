<template>
<div>
  <Header />
  <main>
    <KeysFullList :title="'Новинки'" :type="'newItems'" />
  </main>
  <Footer />
</div>
</template>

<script>
import MainProducts from '@/components/MainProducts'
import NewItems from '@/components/NewItems'
import KeyItems from '@/components/KeyItems'
import AccountItems from '@/components/AccountItems'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import KeysFullList from '@/components/KeysFullList'

export default {


  name: 'Home',
  components: {
    MainProducts,
    NewItems,
    KeyItems,
    AccountItems,
    Header,
    Footer,
    KeysFullList,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
