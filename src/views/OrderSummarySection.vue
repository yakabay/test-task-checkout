<template>
  	<div class="oderSummary flex flex-col justify-between bg-grey-lightest pt-7 px-4 sm:px-12 lg:px-4 pb-4">
		<div>
			<div class="flex justify-between items-baseline mb-2">
				<h3 class="title-2xl">Order Summary</h3>
				<a href="#" class="text-md text-grey underline">edit order</a>
			</div>
		
			<product-summary v-for="product in cartProducts" :product="product" :key="product.id"/>

			<div class="flex justify-between pt-2">
				<div class="text-md text-grey-dark">Subtotal</div>
				<div class="text-md text-grey-dark">${{ subtotalPrice }}</div>
			</div>
			<div class="flex justify-between pt-2">
				<div class="text-md text-grey-dark">Shipping</div>
				<div class="text-md text-grey-dark">{{ !!shippingPrice ? '$'+shippingPrice : 'Free' }}</div>
			</div>
			<div class="flex justify-between pt-2">
				<div class="text-md text-grey-dark">Taxes</div>
				<div class="text-md text-grey-dark">${{ taxesPrice.toFixed(2) }}</div>
			</div>

			<hr class="border-t border-grey-lighter">

			<div class="flex justify-between pt-3 pb-5">
				<div class="text-md text-primary font-semibold">Total</div>
				<div class="text-md text-primary font-semibold">${{ totalPrice.toFixed(2) }}</div>
			</div>
		</div>
		<div class="text-xs text-grey text-center">
			All purchases are subject to our <a href="#" class="text-grey underline">Terms and Conditions.</a>
		</div>
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
		subtotalPrice() {
			let sum = 0; 
			for (let product of this.cartProducts) {
				sum += product.price 
			}
			return sum
		},
		shippingPrice() {
			return this.subtotalPrice < 200 ? 25 : 0
		},
		taxesPrice() {
			return this.subtotalPrice/100 * 3.04
		},
		totalPrice() {
			return this.subtotalPrice + this.shippingPrice + this.taxesPrice
		},
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