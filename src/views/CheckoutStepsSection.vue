<template>
  	<div class="checkoutSteps px-4 sm:px-12 pt-6 pb-12">
    	<nav class="flex items-center h-6 mb-7">
			<router-link class="text-grey-light text-md"
				to="/checkout/shipping" 
			>Shipping</router-link>

			<img src="@/assets/img/arrow-right.svg" class="px-4 h-full opacity-50">

			<router-link class="text-grey-light text-md"
				:class="{'cursor-default': !allShippingFieldsAreFilled}"
				to="/checkout/billing"
				:event="allShippingFieldsAreFilled ? 'click' : ''"
			>Billing</router-link>

			<img src="@/assets/img/arrow-right.svg" class="px-4 h-full opacity-50">

			<router-link class="text-grey-light text-md"
				:class="{'cursor-default': !allShippingFieldsAreFilled || !allBillingFieldsAreFilled }"
				to="/checkout/payment" 
				:event="allShippingFieldsAreFilled && allBillingFieldsAreFilled ? 'click' : ''"
			>Payment</router-link>
		</nav>

		<router-view/>
  	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
	data() {
		return {
		}
	},
	computed: {
		...mapState(['shippingErrors']),
		...mapGetters(['allShippingFieldsAreFilled', 'allBillingFieldsAreFilled']),
	},
}
</script>

<style scoped lang="scss">
.checkoutSteps {
	background-color: white;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	.router-link-exact-active {
		color: #5A0F94;
	}
}
@media only screen and (min-width: 992px) {
	.checkoutSteps {
		width: 57%;
		border-top-left-radius: 5px;
		border-bottom-right-radius: 0;
	}
}
</style>
