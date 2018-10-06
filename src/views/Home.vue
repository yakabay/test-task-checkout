<template>
  	<div class="home">
		<dir>
			<img alt="Vue logo" src="../assets/logo.png">
			<h2>This test app is made with Vue.js</h2>
			<h3>Please navigate to <router-link to="/checkout">Cart</router-link> to play with it )</h3>
		</dir>
		
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
 	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'home',
	components: {
		HelloWorld
	}
}
</script>

<style scoped lang="scss">
.home {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30rem;
}
</style>