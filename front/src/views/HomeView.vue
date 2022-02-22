<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:20%">
    <HelloWorld msg="변수명 검색기"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
