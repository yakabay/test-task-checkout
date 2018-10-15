<template>
	<div class="flex justify-center items-center px-1 sm:px-4" style="height: 30rem;">
		<div class="text-center">
			<img alt="Vue logo" src="@/assets/logo.png">
			<h2 class="text-md sm:text-2xl text-grey-darkest font-medium py-2">
				This test app is made with Vue.js
			</h2>
			<h3 class="text-sm sm:text-xl text-grey-darkest font-medium py-2">
				Navigate to 
				<router-link to="/checkout/shipping" class="text-pink-dark hover:text-pink font-semibold">
					cart
				</router-link> to play with it )
			</h3>
			<h3 class="text-xs sm:text-base text-grey font-medium pt-3">
				To view source code go to 
				<a href="https://github.com/yakabay/test-task-checkout" target="_blank" class="text-grey font-semibold">
					GitHub
				</a>
			</h3>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped lang="scss">
</style>