<template>
    <div>
        <Header />
        <CaseScrolling />
        <CaseForm class="case_form"/>
        <KeysFullList :title="'Состав кейса'" :type="'case'"/>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CaseForm from "@/components/CaseForm"
import CaseScrolling from "@/components/CaseScrolling"
import KeysFullList from "@/components/KeysFullList"

export default {
    name: "Home",
    components: {
        Header,
        Footer,
        CaseForm,
        CaseScrolling,
        KeysFullList,
    },
}
</script>

<style scoped>
.case_form{
    margin: 0 0 100px 0;
}

@media screen and (max-width: 1024px)  {
    .case_form{
        margin: 0 0 80px 0;
    }
}
</style>
