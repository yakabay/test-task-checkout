<template>
  	<div class="checkoutSteps">
    	<nav>
			<router-link to="/checkout/shipping">Shipping</router-link>
			<router-link to="/checkout/billing">Billing</router-link>
			<router-link to="/checkout/payment">Payment</router-link>
		</nav>
		<router-view/>
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
