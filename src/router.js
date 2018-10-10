import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Checkout from './views/CheckoutPage.vue'
import Shipping from './views/ShippingForm.vue'
import Billing from './views/BillingForm.vue'
import Payment from './views/PaymentForm.vue'
import Thanks from './views/ThankYouPage.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/',			component: Home },
		{ path: '/checkout', 	component: Checkout, 
			children: [
				{ path: 'shipping', component: Shipping },
				{ path: 'billing', 	component: Billing },
				{ path: 'payment', 	component: Payment },
			] 
		},
		{ path: '/thanks',		component: Thanks },
	]
})
