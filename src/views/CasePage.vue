<template>
    <div>
        <Header />
        <CaseScrolling />
        <CaseForm/>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CaseForm from "@/components/CaseForm"
import CaseScrolling from "@/components/CaseScrolling"

export default {
    name: "Home",
    components: {
        Header,
        Footer,
        CaseForm,
        CaseScrolling,
    },
}
</script>

<style scoped></style>
