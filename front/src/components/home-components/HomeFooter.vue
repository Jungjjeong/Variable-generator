<template>
  <div class="clearAllContainer">
    <span class='clearAllBtn' v-on:click="clearWord">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearWord: function() {
	  this.$emit('clearWord');
    }
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color: #6138D4;
  font-weight: bold;
  display: block;
}
</style>