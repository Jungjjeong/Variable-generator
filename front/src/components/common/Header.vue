<template>
	<header>
		<div id='nav'>
			<router-link class='menu' to="/">Home</router-link> |
			<router-link class='menu' to="/about">About</router-link>
		</div>
	</header>
</template>
<script>
export default{
}
</script>

<style>
#nav {
  color: white;
  padding: 10px;
  padding-bottom: 15%;
  border-radius: 5px;
  text-align: right;
}

#nav .menu{
  color: white;
  padding: 0px;
  margin: 10px;
  text-decoration: none;
}
</style>

// <style lang="scss" scoped>
// h1 {
//   position: absolute;
//   top : 0;
//   left: 100px;
// }
// </style>