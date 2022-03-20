<template>
  <div>
	  <ul>
      <li v-for="(word, idx) in propsdata" v-bind:key="word.item" class="shadow">
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
  props: ['propsdata'],
  methods: {
    removeWord: function(word, idx) {
      this.$emit('removeWord', word, idx)
    },
    copyComplete: function(word, idx) {
      this.$emit('copyComplete', word, idx)
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