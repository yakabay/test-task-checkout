<template>
	<div class="checkout">
    	<order-summary/>

    	<checkout-steps/>
  	</div>
</template>

<script>
import CheckoutSteps from '@/views/CheckoutStepsSection.vue'
import OrderSummary from '@/views/OrderSummarySection.vue'

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