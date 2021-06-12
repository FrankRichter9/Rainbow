<template>
    <div>
        <Header />
        <main>
            <KeysFullList :title="'Ключи'" :type="'keys'"/>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import KeysFullList from "@/components/KeysFullList"

export default {
    name: "Home",
    components: {
        Header,
        Footer,
        KeysFullList,
    },
}
</script>

<style scoped></style>
