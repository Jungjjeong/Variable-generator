<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:12vh">
    <HomeHeader></HomeHeader>
    <Input v-on:addWord="addOneWord"></Input>
    <List v-bind:propsdata="words" 
      v-on:removeWord="removeOneWord" 
      v-on:copyComplete="copyOneComplete"></List>
    <Footer v-on:clearWord="clearAllWord"></Footer>
  </div>
</template>

<script>
import HomeHeader from '../components/home-components/HomeHeader.vue'
import Input from '../components/home-components/Input.vue'
import List from '../components/home-components/List.vue'
import Footer from '../components/home-components/HomeFooter.vue'


export default {
  data: function() {
    return {
      words: []
    }
  },
  methods: {
    // 각각의 데이터들이 모두 동일 속성
    // 상위 컴포넌트로 올려서 (한개의 컴포넌트로 모아서) 데이터 조작

    // 단어 추가
    addOneWord: function(wordItem) {
      	var obj = {copied: false, item: wordItem};
				// 저장하는 로직
				localStorage.setItem(wordItem, JSON.stringify(obj));
        this.words.push(obj);
    },
    // 단어 삭제
    removeOneWord: function(word, idx) {
      localStorage.removeItem(word.item);
      this.words.splice(idx, 1);
    },
    // 단어 복사 (미구현)
    copyOneComplete: function(word, idx) {
      // word.copied = !word.copied;
      // 직접 접근해서 좋은게 없어요
      this.words[idx].copied = !this.words[idx].copied;
      localStorage.removeItem(word.item);
      localStorage.setItem(word.item, JSON.stringify(word));
    },
    // 단어 모두 삭제
    clearAllWord: function() {
      localStorage.clear();
      this.words = [];
    }
  },
  created: function() {
    if (localStorage.length > 0) {
      for (var i=0; i<localStorage.length; i+= 1) {
        this.words.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // this.words.push(localStorage.key(i));
      }
    }
  },
  components: {
    'HomeHeader' : HomeHeader,
    'Input' : Input,
    'List' : List,
    'Footer' : Footer
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