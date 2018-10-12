<template>
	<div class="relative pr-1">
		<img src="@/assets/img/cart.svg" alt="Cart Icon" class="h-6">
		<div v-if="countOfCartProducts" class="badge text-xs text-white font-semibold rounded-full absolute" style="background-color: #FF1876;">
			{{ countOfCartProducts }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters(['countOfCartProducts'])
	}
}
</script>

<style lang="scss">
.badge {
	height: 17px;
	width: 17px;
	padding: 3px;
	top: -4px;
	right: -3px;
}
</style>