import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/PageHome.vue'
import Checkout from './views/PageCheckout.vue'
import Shipping from './views/Checkout_Shipping.vue'
import Billing from './views/Checkout_Billing.vue'
import Payment from './views/Checkout_Payment.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/',			component: Home },
		{ path: '/checkout', 	component: Checkout, 
			children: [
				{ path: 'shipping', component: Shipping },
				{ path: 'billing', component: Billing },
				{ path: 'payment', component: Payment },
			] 
		},
	]
})
