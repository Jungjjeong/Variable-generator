<template>
  <div>
	  <ul>
      <li v-for="(word, idx) in words" v-bind:key="word.item" class="shadow">
        <span class="copyBtn" v-bind:class="{copyBtnCompleted: word.copied}" v-on:click="copyComplete(word, idx)">
          <i class="fa-solid fa-copy"></i>
        </span>
        <span v-bind:class="{textCompleted: word.copied}">{{ word.item }}</span>
        <span class="removeBtn" v-on:click="removeWord(word, idx)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data : function() {
    return {
      words : []
    }
  },
  // 인스턴스 생성되자마자 실행되는 로직 created
  created: function() {
    if (localStorage.length > 0) {
      for (var i=0; i<localStorage.length; i+= 1) {
        this.words.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // this.words.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeWord: function(word, idx) {
      localStorage.removeItem(word);
      this.words.splice(idx, 1);
    },
    copyComplete: function(word, idx) {
      word.copied = !word.copied;
      localStorage.removeItem(word.item);
      localStorage.setItem(word.item, JSON.stringify(word));
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 20px;
  text-align: left;
  width: 90%;
  display: inline-block;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: rgb(0, 0, 0);
  border: solid 2px white;
  border-radius: 5px;
  color: rgb(255, 255, 255);
}

.copyBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 10px;
}

.copyBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #6138D4;
}
</style>