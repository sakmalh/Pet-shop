<template>
  <Navbar />
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default{
  components: { Navbar, Footer }
}
</script>


<style scoped>
.page-enter-active, 
.page-leave-active {
  transition: 600ms ease all;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>