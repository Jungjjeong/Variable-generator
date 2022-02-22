<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:13vh">
    <HelloWorld msg="변수명 생성기"/>
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
