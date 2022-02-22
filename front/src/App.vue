<template>
  <div id="app">
    <Header />
    <div id="wrapper">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, 
    Footer
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#wrapper {
  height: auto;
  min-height: 85vh;
  flex: 1;
}

Footer {
  position : relative;
  background-color: #4a198a;
  height: 5vh;
  }
// nav {
//   height: 30%;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
