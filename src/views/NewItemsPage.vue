<template>
<div>
  <Header />
  <main>
    <NewItems />
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

export default {


  name: 'Home',
  components: {
    MainProducts,
    NewItems,
    KeyItems,
    AccountItems,
    Header,
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
