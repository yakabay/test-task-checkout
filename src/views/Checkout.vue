<template>
	<div class="checkout">
    	<order-summary/>

    	<checkout-steps/>
  	</div>
</template>

<script>
import CheckoutSteps from '@/components/CheckoutSteps.vue'
import OrderSummary from '@/components/OrderSummary.vue'

export default {
	components: {
		'checkout-steps': CheckoutSteps,
		'order-summary': OrderSummary,
	}
}
</script>

<style scoped lang="scss">
.checkout {
	display: block;
}
@media only screen and (min-width: 992px) {
	.checkout {
		display: flex;
		flex-direction: row-reverse;
	}
}
</style>