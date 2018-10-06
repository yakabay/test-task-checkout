<template>
  	<div class="checkoutSteps">
    	<h1>{{ name }}</h1>
  	</div>
</template>

<script>
export default {
	data() {
		return {
			name: 'Steps',
		}
	},
}
</script>

<style scoped lang="scss">
.checkoutSteps {
	background-color: white;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
}
@media only screen and (min-width: 992px) {
	.checkoutSteps {
		width: 57%;
		border-top-left-radius: 5px;
		border-bottom-right-radius: 0;
	}
}
</style>
