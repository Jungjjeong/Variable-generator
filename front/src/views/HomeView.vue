<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:12vh">
    <HomeHeader></HomeHeader>
    <Input></Input>
    <List></List>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeHeader from '../components/home-components/HomeHeader.vue'
import Input from '../components/home-components/Input.vue'
import List from '../components/home-components/List.vue'


export default {
  components: {
    'HomeHeader' : HomeHeader,
    'Input' : Input,
    'List' : List,
  }
}
</script>

<style>
body {
  text-align: center;
  background: black;
  color: white;
}

.home {
  text-align: center;
}

input {
  border-style: groove;
  width: 80%;
}

button{
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgb(0, 0, 0);
}

</style>