<template>
    <div>
        <Header />
        <CaseForm/>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CaseForm from "@/components/CaseForm"

export default {
    name: "Home",
    components: {
        Header,
        Footer,
        CaseForm
    },
}
</script>

<style scoped></style>
