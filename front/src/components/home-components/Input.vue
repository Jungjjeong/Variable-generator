<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newWordItem" v-on:keyup.enter="addWord">
		<span class="addContainer" v-on:click="addWord">
			<i class="fa-solid fa-play addBtn"/>
		</span>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			newWordItem : ""
		}
	},
	methods: {
		addWord: function() {
			if (this.newWordItem !== "") {
				this.$emit('addWord', this.newWordItem)
				// 서버로 보내서 검색한 결과를 List에 출력
				this.clearInput();
			}
		},
		clearInput: function() {
			this.newWordItem = "";
		}
	}
}
</script>

<style scoped>
input:focus {
	outline: none;
}

.inputBox {
	background: rgb(255, 255, 255);
	width: 80%;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
	display: inline-block;
}

.inputBox input {
	border-style: none;
	font-size: 0.9rem;
}

.addContainer {
	float: right;
	background: linear-gradient(to right, #3D106A, #5B1BAC);
	display: block;
	width: 3rem;
	border-radius: 0 5px 5px 0;
}

.addBtn {
	color: white;
	vertical-align: middle;
}

</style>