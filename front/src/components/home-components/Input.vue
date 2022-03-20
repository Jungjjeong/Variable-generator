<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newWordItem" v-on:keyup.enter="addWord">
		<span class="addContainer" v-on:click="addWord">
			<i class="fa-solid fa-play addBtn"/>
		</span>

		<modal v-if="showModal" @close="showModal = false">
			<!--
			이미 정의된 컴포넌트의 UI요소들은 바꾸기 힘들지만
			slot을 통해서 특정 부분들을 재정의할 수 있어요.
			-->
			<h3 slot="header">경고
				<i class="closeModalBtn fa-solid fa-xmark" @click="showModal = false"></i>
			</h3>
			<div slot="body">생성할 변수의 단어를 입력해주세요.</div>
		</modal>
	</div>
</template>

<script>
import Modal from '../common/Modal.vue'


export default {
	data: function() {
		return {
			newWordItem : "",
			showModal : false
		}
	},
	methods: {
		addWord: function() {
			if (this.newWordItem !== "") {
				this.$emit('addWord', this.newWordItem)
				// 서버로 보내서 검색한 결과를 List에 출력
				this.clearInput();
			}
			else {
				this.showModal = !this.showModal
			}
		},
		clearInput: function() {
			this.newWordItem = "";
		}
	},
	components: {
		'Modal': Modal
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

.closeModalBtn {
	color: #6138D4;
	padding-left: 1%;
}

</style>