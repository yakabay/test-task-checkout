import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Checkout from './views/Checkout.vue'
import Shipping from './components/Checkout_Shipping.vue'
import Billing from './components/Checkout_Billing.vue'
import Payment from './components/Checkout_Payment.vue'

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
