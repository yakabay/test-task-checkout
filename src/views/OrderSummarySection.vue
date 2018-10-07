<template>
  	<div class="oderSummary bg-grey-lightest pt-7 px-4 sm:px-12 lg:px-4">
		<div class="flex justify-between items-baseline mb-2">
			<h3 class="text-primary text-2xl font-normal tracking-tight">Order Summary</h3>
			<a href="#" class="text-md text-grey underline">edit order</a>
		</div>
		<product-summary v-for="product in cartProducts" :product="product" :key="product.id"/>
  	</div>
</template>

<script>
import ProductSummary from '@/components/ProductSummary.vue'
import { mapState } from 'vuex'

export default {
	components: {
		'product-summary': ProductSummary,
	},
	computed: {
		...mapState(['cartProducts']),
	},
}
</script>

<style scoped lang="scss">
.oderSummary {
	border-top-right-radius: 5px;
	border-top-left-radius: 5px;
}
@media only screen and (min-width: 992px) {
	.oderSummary {
		width: 43%;
		border-top-left-radius: 0;
		border-bottom-right-radius: 5px;
	}
}
</style>