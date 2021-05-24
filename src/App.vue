<template>
  <div id="app">
    <Header />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style></style>
