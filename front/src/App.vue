<template>
  <div id="app">
    <Header></Header>
    <div id="wrapper">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'Header' : Header,
    'Footer' : Footer
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #000000;
  padding: 0%;
}


#wrapper {
  height: auto;
  min-height: 85vh;
  flex: 1;
}
</style>
